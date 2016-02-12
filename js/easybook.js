/*!
 * EasyBook Jekyll Theme Javascript
 * 
 * http://laobubu.github.io/jekyll-theme-EasyBook
 * https://github.com/laobubu/jekyll-theme-EasyBook
 *
 * This is just a extension for my theme.
 */

function TOCize(toc,content) {
    var b = $('body');
    var cnt = 0;
    
    var generateLink = function(h) {
        var q = $('<a></a>');
        cnt++;
        var hash = h.attr('id') || ('generated-hash-' + cnt);
        q.text(h.text());
        q.attr('href', '#' + hash );
        q.click(function(e){ b.animate({scrollTop: (h.offset().top) + 'px'},200);e.preventDefault()});
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
    
    if (!cnt) return false;
    
    var scrolldummy=$('<div></div>');
    toc.append(scrolldummy);
    toc.append(uls[0]);
    toc.css({display:'block'});
    
    var maxHeightTOC = '';
    var win = $(window);
    var ppc = $('.post-content');
    var s1 = function(){
        var a=scrolldummy.offset().top,b1=win.scrollTop(),d,c;
        if((c=b1-a+10)<0) c=0;
        if (c) {
            b1 = (win.height()-20);
            var vq = ppc.offset().top+ppc.height()-a-uls[0].height();
            if (c>vq) c=vq;
            d = b1 + 'px';
        } else {
            d = "";
        }
        if (d != maxHeightTOC) {
            maxHeightTOC = d;
            if (d) {
                uls[0].css({position:'fixed', top:'10px', maxHeight:d, width:(toc.width()-20)+"px"});
            } else {
                uls[0].attr("style","");
            }
        }
        scrolldummy.height(c+'px');
    };
    win.scroll(s1);
    win.resize(s1);
}

function SelectAllize(obj,tips) {
    if (!window.getSelection) return null;
    
    var selection=window.getSelection();
    var z = $('<div class="util-notify1"></div>');
    z.text(tips);
    $(document.body).append(z);
    z.hide();
    z.mouseover(function() {
        z.hide();
    })
    
    obj.click(function(e){
        if (!selection.isCollapsed) return;
        
        var tt = e.pageY-z.outerHeight() - 15;
        z.css({left:(e.pageX-z.outerWidth()/2)+'px',top:(tt+10)+'px'});
        z.stop(true);
        z.animate({top:tt,opacity:1.0},200).delay(300).animate({opacity:0.0},200);
        z.show();
    }).dblclick(function(e){
        selection.selectAllChildren(this);
        z.stop(true);
        z.hide();
    })
    
    return true;
}

function RealLoad(){
    var toc=$('.post-toc');
    toc.length && TOCize(toc, $('.post-content'));
    
    SelectAllize($("pre.highlight"), "Dblclick to select all");
    
    $('.post-content > p > img').each(function(){
        if (this.parentElement.childNodes.length == 1) {
            $(this).addClass('middle-image');
        }
    })
}

$(RealLoad)