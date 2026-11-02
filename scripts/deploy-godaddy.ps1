
# ============================================================
# Post-build deployment script for Vernaura Jewels → GoDaddy
# ============================================================

$ErrorActionPreference = "Stop"
$outDir = Join-Path (Get-Location).Path "out"

Write-Host "=== Step 1: Writing root .htaccess ===" -ForegroundColor Cyan

$rootHtaccess = @'
# ====================================================================
# GoDaddy cPanel Apache Config — Vernaura Jewels
# IMPORTANT: Upload this to public_html root (alongside index.html)
# ====================================================================

# Directory index
DirectoryIndex index.html index.php

# No directory browsing
Options -Indexes

# Custom 404
ErrorDocument 404 /404.html

# ── MIME Types ──────────────────────────────────────────────────────
<IfModule mod_mime.c>
  AddType application/javascript .js .mjs
  AddType text/css .css
  AddType font/woff2 .woff2
  AddType font/woff .woff
  AddType font/ttf .ttf
  AddType image/svg+xml .svg
  AddType image/webp .webp
  AddType image/png .png
  AddType image/jpeg .jpg .jpeg
  AddType application/json .json
</IfModule>

AddDefaultCharset UTF-8

# ── URL Rewriting ───────────────────────────────────────────────────
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # ✅ CRITICAL: Let _next/ static files pass through untouched
  RewriteRule ^_next/(.*)$ _next/$1 [L]

  # Serve existing files directly
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # Serve existing directories directly
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Redirect /page to /page/ if /page/index.html exists
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}/index.html -f
  RewriteRule ^(.+[^/])$ /$1/ [R=301,L]

  # Serve page/index.html for clean URL routes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*)$ /$1/index.html [L]

  # ── Enable HTTPS (uncomment once SSL is active in GoDaddy cPanel)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

</IfModule>

# ── GZIP Compression ────────────────────────────────────────────────
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE application/xml image/svg+xml
  AddOutputFilterByType DEFLATE font/woff font/woff2
</IfModule>

# ── Browser Caching ─────────────────────────────────────────────────
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType application/json "access plus 0 seconds"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
</IfModule>

# ── Security Headers ─────────────────────────────────────────────────
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  <FilesMatch "\.(js|css|woff|woff2|ttf|png|jpg|jpeg|webp|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
'@

Set-Content -Path (Join-Path $outDir ".htaccess") -Value $rootHtaccess -Encoding UTF8
Write-Host "✅ Root .htaccess written" -ForegroundColor Green

Write-Host "=== Step 2: Writing _next/.htaccess ===" -ForegroundColor Cyan

$nextHtaccess = @'
# Allow all access to _next static assets
<IfModule mod_authz_core.c>
  Require all granted
</IfModule>
<IfModule !mod_authz_core.c>
  Order allow,deny
  Allow from all
</IfModule>

<IfModule mod_mime.c>
  AddType application/javascript .js .mjs
  AddType text/css .css
  AddType font/woff2 .woff2
  AddType font/woff .woff
  AddType image/svg+xml .svg
  AddType image/webp .webp
</IfModule>

Options -Indexes
'@

Set-Content -Path (Join-Path $outDir "_next\.htaccess") -Value $nextHtaccess -Encoding UTF8
Write-Host "✅ _next/.htaccess written" -ForegroundColor Green

Write-Host "=== Step 3: Remove Next.js internal txt files from deployment ===" -ForegroundColor Cyan
Get-ChildItem -Path $outDir -Filter "*.txt" -File | Where-Object { $_.Name -ne "robots.txt" } | Remove-Item -Force
Get-ChildItem -Path $outDir -Filter "__next.*" -File | Remove-Item -Force
Copy-Item -Path "public\robots.txt" -Destination (Join-Path $outDir "robots.txt") -Force
Write-Host "✅ Cleaned up internal files, preserved robots.txt" -ForegroundColor Green

Write-Host "=== Step 4: Creating final deployment ZIP ===" -ForegroundColor Cyan
$zipPath = Join-Path (Get-Location).Path "vernaura-jewels-godaddy.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory(
    $outDir,
    $zipPath,
    [System.IO.Compression.CompressionLevel]::Optimal,
    $false
)

$zip = Get-Item $zipPath
Write-Host "✅ ZIP created: $($zip.Name)" -ForegroundColor Green
Write-Host "   Size: $([math]::Round($zip.Length / 1MB, 2)) MB"

# Verify contents
$zipCheck = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$totalFiles = $zipCheck.Entries.Count
$hasHtaccess = ($zipCheck.Entries | Where-Object { $_.FullName -eq ".htaccess" }).Count -gt 0
$hasNextHtaccess = ($zipCheck.Entries | Where-Object { $_.FullName -match "_next" -and $_.Name -eq ".htaccess" }).Count -gt 0
$cssCount = ($zipCheck.Entries | Where-Object { $_.Name -match "\.css$" }).Count
$jsCount = ($zipCheck.Entries | Where-Object { $_.Name -match "\.js$" }).Count
$htmlCount = ($zipCheck.Entries | Where-Object { $_.Name -match "\.html$" }).Count
$zipCheck.Dispose()

Write-Host ""
Write-Host "=== ZIP Verification ===" -ForegroundColor Yellow
Write-Host "Total files:       $totalFiles"
Write-Host "Root .htaccess:    $hasHtaccess"
Write-Host "_next/.htaccess:   $hasNextHtaccess"
Write-Host "CSS files:         $cssCount"
Write-Host "JS files:          $jsCount"
Write-Host "HTML pages:        $htmlCount"
Write-Host ""
Write-Host "🚀 Ready to deploy to GoDaddy public_html!" -ForegroundColor Magenta
