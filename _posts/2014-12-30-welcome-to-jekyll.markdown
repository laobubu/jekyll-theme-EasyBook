---
layout: post
title:  "Welcome to Jekyll and EasyBook"
date:   2014-12-30 09:00:13
categories: jekyll update
permalink: /archivers/hello
---

## Hello World! ##

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

GitHub Flavored Markdown is supported.

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

## EasyBook Advanced Functions ##

You are using [EasyBook][github-easybook] the template from [laobubu.net](http://laobubu.net). Therefore some features are supported now:

* **Pagination** is enabled.
* **Disqus** or **多说** is ready.
* **TOC** for posts is enabled.
* **Profile** including your links and avatar on the sidebar.
* *And more...*

> **Tips:** You can disable Disqus or 多说 on posts/pages by adding `nocomments: true` into [YAML Front Matter][frontmatter].

## Translation ##

There are some Chinese words on the pages but you can translate/substitute them quickly:

|           File            |    Chinese    |    English    |
|         :-----:           |   :-------:   |   :-------:   |
|`_includes/sidebar.html`   | 最新文章      | Newest Posts  |
|`about.md`                 | *Everything*  | *Up to you*   |
|`404.md`                   | *Everything*  | *Up to you*   |
|`index.html`               | 通过 RSS 订阅 | RSS Feed      |
|`index.html`               | 文章列表      | Posts         |
|`index.html`               | 前一页        | Prev (Page)   |
|`index.html`               | 后一页        | Next (Page)   |

Besides, I use upaiyun CDN to make everyone lncluding Chinese visitors feel speedy. 

You can replace it in `_includes/head.html` with your favorite CDN like Google CDN.

## Support me by... ##

### Add a link ###

I hope you can leave a message on `about.md` like this (with links):

> This website is using [laobubu](http://laobubu.net)'s theme: [EasyBook](https://github.com/laobubu/jekyll-theme-EasyBook)

I don't add it to the footer because I want to make the footer simple :)

### PayPal Donate ###

Well, I'd appreciate! :D

The "donate" button is here: http://laobubu.net/donate.html

### Star and Fork on GitHub (free) ###

No attend to donate? That's okay. You can also star and fork my project...

... like this template/theme [EasyBook][github-easybook]

## And Here We Go ##

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[frontmatter]: http://jekyllrb.com/docs/frontmatter/
[github-easybook]: https://github.com/laobubu/jekyll-theme-EasyBook