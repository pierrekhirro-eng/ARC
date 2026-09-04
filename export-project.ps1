$ErrorActionPreference = "Stop"

$root = Get-Location
$output = Join-Path $root "PROJECT-SNAPSHOT.txt"

$excludeDirectories = @(
    "node_modules",
    "dist",
    ".git",
    "generated"
)

$excludeFiles = @(
    ".env",
    "dev.db",
    "PROJECT-SNAPSHOT.txt"
)

$extensions = @(
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".json",
    ".html",
    ".prisma",
    ".md",
    ".yml",
    ".yaml"
)

function ShouldExcludePath {
    param(
        [string]$Path
    )

    foreach ($dir in $excludeDirectories) {
        $pattern = [regex]::Escape(
            [IO.Path]::DirectorySeparatorChar +
            $dir +
            [IO.Path]::DirectorySeparatorChar
        )

        if ($Path -match $pattern) {
            return $true
        }

        if ($Path -match "[\\/]+$([regex]::Escape($dir))([\\/]|$)") {
            return $true
        }
    }

    return $false
}

$files = Get-ChildItem `
    -Path $root `
    -Recurse `
    -File |
    Where-Object {
        $_.Name -notin $excludeFiles -and
        $_.Extension.ToLower() -in $extensions -and
        -not (ShouldExcludePath $_.FullName)
    } |
    Sort-Object FullName

"# ============================================================" |
    Set-Content $output -Encoding UTF8

"ARC STUDIO - PROJECT SNAPSHOT" |
    Add-Content $output -Encoding UTF8

"Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" |
    Add-Content $output -Encoding UTF8

"# ============================================================" |
    Add-Content $output -Encoding UTF8

"" | Add-Content $output -Encoding UTF8

foreach ($file in $files) {

    $relativePath = $file.FullName.Substring(
        $root.Path.Length
    ).TrimStart(
        "\",
        "/"
    )

    "" | Add-Content $output -Encoding UTF8

    "============================================================" |
        Add-Content $output -Encoding UTF8

    "FILE: $relativePath" |
        Add-Content $output -Encoding UTF8

    "============================================================" |
        Add-Content $output -Encoding UTF8

    Get-Content $file.FullName -Raw |
        Add-Content $output -Encoding UTF8
}

Write-Host ""
Write-Host "========================================"
Write-Host " SNAPSHOT GERADO COM SUCESSO"
Write-Host "========================================"
Write-Host ""
Write-Host "Arquivo:"
Write-Host $output
Write-Host ""
Write-Host "Arquivos incluidos: $($files.Count)"
Write-Host ""