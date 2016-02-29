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
    
    var make = function(tag) {
        return document.createElement(tag)
    }
    
    var aniscroll = {
        to: function(top) {
            aniscroll.target = top;
            if (aniscroll.running) return;
            aniscroll.running = setInterval(aniscroll.tick, 20);
        },
        target: 0,
        running: 0,
        tick: function() {
            document.body.scrollTop = (document.body.scrollTop + aniscroll.target) / 2;
            if (Math.abs(document.body.scrollTop - aniscroll.target) < 10) {
                document.body.scrollTop = aniscroll.target;
                clearInterval(aniscroll.running)
                aniscroll.running = 0
            }
        }
    }
    
    var generateLink = function(h) {
        var q = make('a');
        cnt++;
        var hash = h.getAttribute('id');
        if (!hash) {
            hash = ('generated-hash-' + cnt);
            h.setAttribute('id', hash);
        }
        q.textContent = h.textContent;
        q.setAttribute('href', '#' + hash );
        q.addEventListener('click', 
            function(e){ 
                aniscroll.to(h.getBoundingClientRect().top + document.body.scrollTop);
                e.preventDefault();
            }
            ,false);
        return q;
    };
    
    var hs = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    var cul = null, plevel = 1;
    var uls = [make('ul')];
    for (var i=0;i<hs.length;i++) {
        var level = +hs[i].tagName.substr(1);
        var hi = hs[i];
        var ti = make('li');
        ti.appendChild(generateLink(hi));
        if (plevel < level) {
            do {
                uls.push(make('ul'));
                uls[uls.length-2].appendChild(uls[uls.length-1]);
            } while (++plevel < level);
        } else if (plevel > level) {
            do {
                cul = uls.pop();
            } while (--plevel > level);
        }
        cul = uls[uls.length-1];
        cul.appendChild(ti);
    }
    while(true) {
        var chs = uls[0].children;
        if (chs.length == 1 && chs[0].tagName == 'UL')
            uls.shift();
        else
            break;
    }
    
    if (!cnt) return false;
    
    var scrolldummy=make('div');
    toc.appendChild(scrolldummy);
    toc.appendChild(uls[0]);
    toc.style.display = 'block';
    
    var maxHeightTOC = '';
    var win = $(window);
    var ppc = $('.post-content');
    var s1 = function(){
        var a=scrolldummy.getBoundingClientRect().top + document.body.scrollTop,b1=win.scrollTop(),d,c;
        if((c=b1-a+10)<0) c=0;
        if (c) {
            b1 = (win.height()-20);
            var vq = ppc.offset().top+ppc.height()-a-uls[0].offsetHeight;
            if (c>vq) c=vq;
            d = b1 + 'px';
        } else {
            d = "";
        }
        if (d != maxHeightTOC) {
            maxHeightTOC = d;
            if (d) {
                uls[0].setAttribute('style', 'maxHeight:' + d + '; width:' + (toc.offsetWidth-20) + "px" );
            } else {
                uls[0].setAttribute("style","");
            }
        }
        scrolldummy.style.height = (c+'px');
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
    var toc=document.querySelector('.post-toc');
    toc && TOCize(toc, document.querySelector('.post-content'));
    
    SelectAllize($("pre.highlight"), "Dblclick to select all");
    
    $('.post-content > p > img').each(function(){
        if (this.parentElement.childNodes.length == 1) {
            $(this).addClass('middle-image');
        }
    })
}

RealLoad()
