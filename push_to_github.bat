@echo off
echo ========================================================
echo Pushing Portofolio to https://github.com/Luxhominum/portofolio
echo ========================================================
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo Successfully pushed to GitHub!
    echo Enable GitHub Pages at: https://github.com/Luxhominum/portofolio/settings/pages
) else (
    echo.
    echo Push failed. Please check your GitHub repository and authentication.
)
pause
