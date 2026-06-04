# [Profile Page](https://abrarmudhir.github.io/)  👋
[![Build Status](https://github.com/abrarmudhir/abrarmudhir.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/abrarmudhir/abrarmudhir.github.io/actions/workflows/deploy.yml)

## Install

This site is built with Jekyll and Bundler. If `bundle install` fails in
PowerShell with `bundle : The term 'bundle' is not recognized`, Bundler is not
installed or Ruby is not on your `PATH`.

### Windows / PowerShell

1. Install Ruby with DevKit from PowerShell:

   ```powershell
   winget install RubyInstallerTeam.RubyWithDevKit.3.3
   ```

   If `winget` is not available, install Ruby with DevKit manually from
   [RubyInstaller for Windows](https://rubyinstaller.org/downloads/).

2. Close and reopen PowerShell, then check Ruby is available:

   ```powershell
   ruby -v
   gem -v
   ```

   If `ruby` is still not recognized, Ruby may be installed but missing from
   your `PATH`. Check for the install directory:

   ```powershell
   Get-ChildItem -Path C:\Ruby* -Directory
   ```

   If Ruby is installed at `C:\Ruby33-x64`, add it to your permanent user
   `PATH`:

   ```powershell
   $rubyBin = "C:\Ruby33-x64\bin"
   $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
   if (($userPath -split ";") -notcontains $rubyBin) {
     [Environment]::SetEnvironmentVariable("Path", "$rubyBin;$userPath", "User")
   }
   ```

   Confirm the permanent user `PATH` contains Ruby:

   ```powershell
   [Environment]::GetEnvironmentVariable("Path", "User") -split ";" | Where-Object { $_ -eq "C:\Ruby33-x64\bin" }
   ```

   Close PowerShell completely, open a new PowerShell window, then verify
   again. If you are using a terminal inside VS Code, Cursor, or another IDE,
   close and reopen the IDE too, because it may have cached the old `PATH`.

   ```powershell
   ruby -v
   gem -v
   ```

   To use Ruby immediately in the already-open PowerShell window, also run:

   ```powershell
   $env:Path = "C:\Ruby33-x64\bin;$env:Path"
   ```

3. Install Bundler:

   ```powershell
   gem install bundler
   ```

4. Install the project gems:

   ```powershell
   bundle install
   ```

5. Build the site:

   ```powershell
   bundle exec jekyll build
   ```

6. Run the site locally:

   ```powershell
   bundle exec jekyll serve --livereload --port 4001
   ```

   Then open <http://localhost:4001/>.

### macOS / Linux

Install Ruby and Bundler with your package manager or Ruby version manager, then
run:

```bash
gem install bundler
bundle install
bundle exec jekyll build
bundle exec jekyll serve --livereload --port 4001
```

## Directory Structure

`_data`: store data files for things like skills, projects, work history, and so on.

`_drafts`: blog post drafts.

`_includes`: Where you define Jekyll includes, which are sort of like reusable HTML components.

`_layouts`: HTML layouts define the structure of your site and can be nested in one another.

`_posts`: Where you'll store all of your blog posts as Markdown files.

`_sass`: This is where your SASS partials go. You'll then need to import them in _assets/main.scss.

`_site`: Jekyll's auto-generated build directory, which houses your final, compiled site. It's not pushed to GitHub because it's in .gitignore.

`_assets`: Mainly for storing images and scripts, but it can also house a main CSS file.

