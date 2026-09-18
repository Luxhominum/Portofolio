@echo off
echo ========================================================
echo Pushing Portfolio to https://github.com/Luxhominum/portfolio
echo ========================================================
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo Successfully pushed to GitHub!
    echo Enable GitHub Pages at: https://github.com/Luxhominum/portfolio/settings/pages
) else (
    echo.
    echo Push failed. Please check your GitHub repository and authentication.
)
pause
