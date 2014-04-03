# Bootstrap Listr

A simple PHP script to display folders and files on a server in a well formed list, making use of the [Bootstrap 3.1](http://getbootstrap.com) framework.

![Screenshot](https://raw.github.com/idleberg/Bootstrap-Listr/gh-pages/images/screenshot-font_awesome.png)  
*Screenshot: Example with [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icons enabled*

For examples using different configurations, have a look at the [live demos](http://demo.idleberg.com/Bootstrap-Listr)!

## Installation

Clone this repository using `git clone https://github.com/idleberg/Bootstrap-Listr` or [`download`](https://raw.github.com/idleberg/Bootstrap-Listr/master/index.php) the raw file.

## Usage

I am unaware of a method to use one index file for several directories at once (feel free to correct me!), hence you will have to copy the index in every directory where you would like to use it. Since Bootstrap Listr is a one-file solution, doing so is relatively easy.

### Options

You can configure a number of settings in the header of the script file:

* Optional columns for size, modified date, permissions
* Document icons
* Column sorting
* Viewport
* List of ignored files
* Default location for JavaScript libraries and style sheets
* Google Analytics

### Naming

If you prefer a different file name for the script, you can rename it without worrying about the ignore list. However, depending on your server, you might have declare the renamed file as your directory index.

* Apache: `DirectoryIndex myIndex.php` (see [documentation](http://httpd.apache.org/docs/2.2/mod/mod_dir.html))
* lighttpd: `index-file.names = ( "/myIndex.php" )` (see [documentation](http://redmine.lighttpd.net/projects/1/wiki/Docs_ModDirlisting))
* nginx: `index myIndex.php` (see [documentation](http://nginx.org/en/docs/http/ngx_http_index_module.html))

### Font Awesome

Rather than using generic icons, you can enable [Font Awesome](http://fortawesome.github.io/Font-Awesome/) for file-specific icons. Note that this will require extra resources, hence increase the load time.

### Theming

Should you decide to use [Bootswatch](http://bootswatch.com/) (or any other) themes, please note that some of these do not include the [glyphicons](http://getbootstrap.com/components/#glyphicons) used in the script. You can disable glyphicons in the script header.

### Libraries & Style-sheets

For your convenience, we use CDNs for Bootstrap and JQuery. While this is an often recommended practice, it might not work too well for the [Stupid Table Plugin](http://joequery.github.io/Stupid-Table-Plugin/) which is hosted on [GitHub Pages](http://pages.github.com/). Whatever reasons you might have to change the default locations, you can do so easily in the script header.

## Credits

This project is built upon—or includes—code from the following people:

* Greg Johnson - [PHPDL lite](http://greg-j.com/phpdl/) [dead link]
* Na Wong - [Listr](http://nadesign.net/listr/)
* Joe McCullough - [Stupid Table Plugin](http://joequery.github.io/Stupid-Table-Plugin/)

## License

This work by Jan T. Sott is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US)

(I am aware that this license isn't ideal for software, but the choice wasn't mine)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/Bootstrap-Listr) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
