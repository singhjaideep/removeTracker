javascript:(function(){thisurl=document.getElementsByClassName("what code")[0].innerHTML;substring=thisurl.search("url=");sliced=thisurl.slice([substring+4],thisurl.length);decoded=decodeURIComponent(sliced);alert(decoded);window.location.href=decoded})();
