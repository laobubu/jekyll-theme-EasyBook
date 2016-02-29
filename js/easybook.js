/*!
 * EasyBook Jekyll Theme Javascript
 * 
 * http://laobubu.github.io/jekyll-theme-EasyBook
 * https://github.com/laobubu/jekyll-theme-EasyBook
 *
 * This is just a extension for my theme.
 */

function TOCize(toc, content, matchHeightTo) {
    if (!(toc && content && matchHeightTo)) return false
    
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
            var oldST = document.body.scrollTop, newST = ~~((oldST + aniscroll.target) / 2);
            document.body.scrollTop = newST;
            if (document.body.scrollTop < newST || Math.abs(newST - aniscroll.target) < 10) {
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
    var ppc = document.querySelector('.col-main');
    var s1 = function(){
        var scrollTop=document.body.scrollTop, dummyClientTop=scrolldummy.getBoundingClientRect().top,
            margin = 10,c,d; // c = dummyHeight, d = TOC.maxHeight (+'px')
        if ((c = -dummyClientTop + margin) < 0) c = 0;
        if (c) {
            var wh = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight,
            cbox = matchHeightTo.getBoundingClientRect(),
            vq = cbox.bottom - dummyClientTop - uls[0].offsetHeight;
            if (c>vq) c=vq;
            d = (wh - (margin<<1)) + 'px';
        } else {
            d = "";
        }
        if (d != maxHeightTOC) { //status lock.
            maxHeightTOC = d;
            if (d) {
                uls[0].setAttribute('style', 'max-height:' + d + '; width:' + (toc.offsetWidth-20) + "px" );
            } else {
                uls[0].setAttribute("style","");
            }
        }
        scrolldummy.style.height = (c+'px');
    };
    window.addEventListener('scroll', s1, false);
    window.addEventListener('resize', s1, false);
}

function SelectAllize(selector,tips) {
    if (!window.getSelection) return null;
    
    var obj = document.querySelectorAll(selector);
    var selection=window.getSelection();
    var z = document.createElement("div");
    z.className = "util-notify1";
    z.textContent = tips;
    document.body.appendChild(z)
    
    function hide() {
        z.classList.add('hidden')
        z.style.top = '-200px'
    }
    
    hide();
    z.addEventListener('mouseover', hide, false);
    
    function clickHandler(e){
        if (!selection.isCollapsed) return;
        
        var tt = e.pageY-z.offsetHeight - 15;
        z.setAttribute('style', 'left:' + (e.pageX-z.offsetWidth/2) + 'px;top:' + (tt+10) + 'px');
        z.classList.remove('hidden');
        setTimeout(hide, 1000);
    }
    
    function dblClickHandler(e){
        selection.selectAllChildren(this);
        hide();
    }
    
    for(var i = obj.length; i--;) {
        var oi = obj[i];
        oi.addEventListener('click', clickHandler, false);
        oi.addEventListener('dblclick', dblClickHandler, false);
    }
    
    return true;
}

function RealLoad(){
    TOCize(
        document.querySelector('.post-toc'), 
        document.querySelector('.post-content'), 
        document.querySelector('.col-main')
    );
    
    SelectAllize("pre.highlight", "Dblclick to select all");
    
    var imgs = document.querySelectorAll('.post-content > p > img');
    for(var i=imgs.length; i--;){
        if (imgs[i].parentElement.childNodes.length === 1) {
            imgs[i].classList.add('middle-image');
        }
    }
}

RealLoad();
