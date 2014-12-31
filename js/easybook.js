/*!
 * EasyBook Jekyll Theme Javascript
 * http://laobubu.net
 * https://github.com/laobubu/laobubu.github.io/tree/template
 *
 * This is just a extension for my theme.
 */

function TOC(toc,content) {
    var b = $('body');
    var cnt = 0;
    
    var generateLink = function(h) {
        var q = $('<a></a>');
        var hash = 'generated-hash-' + (cnt++);
        q.text(h.text());
        q.attr('href', '#' + hash );
        q.click(function(){ b.animate({scrollTop: (h.offset().top) + 'px'},200);});
        h.append($('<a name="#' + hash + '"></a>'));
        return q;
    };
    
    var hs = content.children('h1, h2, h3, h4, h5, h6');
    var cul = null, plevel = 1;
    var uls = [$('<ul></ul>')];
    for (var i=0;i<hs.length;i++) {
        var level = +hs[i].tagName.substr(1);
        var hi = $(hs[i]);
        var ti = $('<li></li>');
        ti.append(generateLink(hi));
        if (plevel < level) {
            do {
                uls.push($('<ul></ul>'));
                uls[uls.length-2].append(uls[uls.length-1]);
            } while (++plevel < level);
        } else if (plevel > level) {
            do {
                cul = uls.pop();
            } while (--plevel > level);
        }
        cul = uls[uls.length-1];
        cul.append(ti);
    }
    while(true) {
        var chs = uls[0].children();
        if (chs.length == 1 && chs[0].tagName == 'UL')
            uls.shift();
        else
            break;
    }
    toc.append(uls[0]);
    if (cnt) toc.css({display:'block'})
}

$(function(){
    var toc=$('.post-toc');
    toc && (new TOC(toc, $('.post-content')));
});