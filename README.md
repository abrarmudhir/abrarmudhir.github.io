# [Profile Page](https://abrarmudhir.github.io/)  👋
[![Build Status](https://github.com/abrarmudhir/abrarmudhir.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/abrarmudhir/abrarmudhir.github.io/actions/workflows/deploy.yml)

## Install

```bash
bundle install
```

```bash
bundle exec jekyll build
```

```bash
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

