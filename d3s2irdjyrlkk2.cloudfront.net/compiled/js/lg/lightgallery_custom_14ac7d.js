light=window.light||{};var share,fullscreen,progressBar,autoplayControls,fourceautoplay,escKey,closeButton,counter,actualSize,captionright,fillMode,galleryTitle,galleryDesc,captionenableSwipe,captionenableDrag,lightboximg_size,lightboximg_responsive_size,photofilename,zoom=!1,caption=!0,photoInfo=!1,thumbnail=!0,transition_type="lg-fade",transition_speed=1e3,controls=!0,autoplay=!1,galleryIcon=!1,fotomoto=!1,queryParam="";light.initOptions=function(){light.data=[],light.div="#container_slider",void 0===light.userdata&&(light.userdata={}),light.userdata.isClientproofing&&light.userdata.isClientdownload&&""!=light.userdata.isClientdownloadstatus?download=!0:download=!1,light.userdata.isClientproofing&&light.userdata.isClientComment&&""!=light.userdata.isClientfavoritestatus?comments=!0:comments=!1,light.userdata.isClientproofing&&light.userdata.isClientfavorite&&""!=light.userdata.isClientfavoritestatus?favorite=!0:favorite=!1,"1"==light.userdata.isClientstore&&"1"==light.userdata.isGallerystore?store=!0:store=!1,share="hide"!=light.userdata.shareWidget,fotomoto=!light.userdata.isClientproofing&&void 0!==userObject.fotomotoId&&""!=userObject.fotomotoId&&"undefined"!=userObject.IsSaleable&&1==userObject.IsSaleable,photofilename="yes"==userObject.photofilename,"fade"==userObject.slideshowTransition?transition_type="lg-fade":"horizontal_swipe"==userObject.slideshowTransition?transition_type="lg-slide":"vertical_swipe"==userObject.slideshowTransition&&(transition_type="lg-slide-vertical"),transition_speed=1e3*parseInt(userObject.slideshowSpeed),"show"==userObject.controls?(controls=!0,hideBarsDelay=3e3):"hover"==userObject.controls?(controls=!0,hideBarsDelay=3e3):"hide"==userObject.controls&&(controls=!0,hideBarsDelay=3e3),autoplay="no"!=userObject.slideshowAutoplay,fillMode="fit"!=userObject.slideshowFitmode&&("fill"==userObject.slideshowFitmode||"crop"==userObject.slideshowFitmode||"pan"==userObject.slideshowFitmode),galleryTitle=$.trim($(".js-gallery-title-content").data("gallerytitle")),galleryDesc=$.trim($(".js-gallery-title-content").data("gallerydesc")),$("body").on("click",".js-gallery-content-btn",function(){$("body").append("<div class='featherlight'><div class='featherlight-content'><span class='featherlight-close-icon featherlight-close'><span class='menu-svg-icon'><svg viewBox='0 0 320 512'><use xlink:href='#times-pixpa-icon' width='320' height='512'></use></svg></span></span><div class='u"+userObject.userId+"-primary-text-modal'>"+galleryTitle+"</div><div class='photo-info-desc u"+userObject.userId+"-secondary-text-modal'>"+galleryDesc+"</div></div></div>"),$(".featherlight").show()}),$("body").on("click",".featherlight-close-icon",function(){$(".featherlight").remove()}),""!=galleryDesc&&(galleryIcon=!0),$(window).innerWidth()<=767?"slideshow"==userObject.onloadType&&"single_image"==userObject.slideshowLayout?(share="hide"!=light.userdata.shareWidget,zoom=!1,fullscreen=!1,autoplayControls=!1,fourceautoplay=!0,escKey=!1,closeButton=!0,counter=!0,actualSize=!1,progressBar=!1,thumbnail=!1,"image"!=userObject.slideshowImageMode&&"thumbnail"!=userObject.slideshowImageMode||(photoInfo=!0)):(thumbnail=!1,fullscreen=!0,autoplayControls=!0,fourceautoplay=!0,progressBar=!1,actualSize=!0,"caption"==userObject.slideshowImageMode||"caption-right"==userObject.slideshowImageMode?(photoInfo=!1,zoom=!1,captionenableSwipe=!1,captionenableDrag=!1):(zoom=!1,photoInfo=!0,captionenableSwipe=!0,captionenableDrag=!0)):"slideshow"==userObject.onloadType&&"single_image"==userObject.slideshowLayout?(share="hide"!=light.userdata.shareWidget,zoom=!1,fullscreen=!0,autoplayControls=!0,fourceautoplay=!0,escKey=!0,closeButton=!0,counter=!0,actualSize=!0,progressBar=!1,"image"==userObject.slideshowImageMode?(thumbnail=!1,captionright="",photoInfo=!0):"thumbnail"==userObject.slideshowImageMode?(photoInfo=!0,captionright="",$(".lg-thumb").width($(".stage-spacing").width())):"caption"==userObject.slideshowImageMode?(thumbnail=!1,photoInfo=!1,captionright="",zoom=!1):"caption-right"==userObject.slideshowImageMode?(thumbnail=!1,photoInfo=!0,window.innerWidth<=767?(captionright="",photoInfo=!1,zoom=!1):(captionright="fb-comments",photoInfo=!1)):(thumbnail=!1,captionright="",photoInfo=!0),"fill"!=userObject.slideshowFitmode&&"crop"!=userObject.slideshowFitmode&&"pan"!=userObject.slideshowFitmode||(fillMode=!1)):"slideshow"!=userObject.onloadType||"vertical_slider"!=userObject.slideshowLayout&&"vertical_slider_detailed"!=userObject.slideshowLayout?(fullscreen=!0,autoplayControls=!0,fourceautoplay=!0,escKey=!0,closeButton=!0,counter=!0,actualSize=!0,progressBar=!1,"image"==userObject.slideshowImageMode?(zoom=!1,thumbnail=!1,captionright="",photoInfo=!0):"thumbnail"==userObject.slideshowImageMode?(zoom=!1,photoInfo=!0,captionright="",$(".lg-thumb").width($(".stage-spacing").width())):"caption"==userObject.slideshowImageMode?(thumbnail=!1,captionright="",zoom=(window.innerWidth,!1)):"caption-right"==userObject.slideshowImageMode?window.innerWidth<=1024?(captionright="",photoInfo=!1,zoom=!1):(captionright="fb-comments",photoInfo=!1,zoom=!1,thumbnail=!1):(thumbnail=!1,captionright="",photoInfo=!0)):(progressBar=!1,share="hide"!=light.userdata.shareWidget,"image"==userObject.slideshowImageMode?(thumbnail=!1,captionright="",photoInfo=!0):"thumbnail"==userObject.slideshowImageMode?(photoInfo=!0,captionright="",$(".lg-thumb").width($(".stage-spacing").width())):"caption"==userObject.slideshowImageMode?(photoInfo=!1,captionright="",thumbnail=!1,zoom=(window.innerWidth,!1)):"caption-right"==userObject.slideshowImageMode?(thumbnail=!1,window.innerWidth<=767?(captionright="",photoInfo=!1,zoom=!1):(captionright="fb-comments",photoInfo=!1)):(thumbnail=!1,captionright="",photoInfo=!0)),1!=light.searchPage&&1!=light.isStore||(autoplayControls=!1,thumbnail=!1,fourceautoplay=!1,galleryIcon=!1,transition_type="lg-fade",1==light.isStore&&(photoInfo=!1,share=!1),1==light.searchPage&&(photoInfo=!1,share=!1))},light.config=function(t){$.each(void 0===t?window.total_data:t,function(t,e){if(window.innerWidth>767?"1200"==userObject.lightboximg_size?(lightboximg_size=light.cdn+e.photo_1200,lightboximg_responsive_size=light.cdn+e.photo_1200+" 1200 "):"1440"==userObject.lightboximg_size?(lightboximg_size=light.cdn+e.photo_1500,lightboximg_responsive_size=light.cdn+e.photo_1500+" 1500 "):"2048"==userObject.lightboximg_size?(lightboximg_size=light.cdn+e.largepath,lightboximg_responsive_size=light.cdn+e.largepath+" 2048"):(lightboximg_size=light.cdn+e.largepath,lightboximg_responsive_size=light.cdn+e.photo_1200+" 1200, "+light.cdn+e.photo_1500+" 1500, "+light.cdn+e.largepath+" 2048"):(lightboximg_size=light.cdn+e.largepath,lightboximg_responsive_size=light.cdn+e.photo_1200+" 1200, "+light.cdn+e.photo_1500+" 1500, "+light.cdn+e.largepath+" 2048"),1==e.type?light.data[t]={responsive:lightboximg_responsive_size,src:lightboximg_size,thumb:light.cdn+e.photo_500,jcrop:e.photo_300?"1":"0",_photoid:e.id,_galleryid:e.galleryid,downloadurl:{500:e.photo_500,1200:e.photo_1200,2000:e.largepath,original:e.originalpath},tweetText:"@pixpa",pinterestText:"pinterest text",photoinfotitle:$.trim(e.title),photoinfodesc:$.trim(e.photodesc),photofilename:e.filename,slidertype:"imgslide",fileExtension:e.extension}:2==e.type?light.data[t]={src:e.description,thumb:""!=e.largepath?light.cdn+e.photo_1200:light.cdn+e.photo_500,_photoid:e.id,_galleryid:e.galleryid,tweetText:"tweet text",pinterestText:"pinterest text",poster:""==e.largepath?e.photo_1200:lightboximg_size,photofilename:"",photoinfotitle:$.trim(e.title),photoinfodesc:$.trim(e.photodesc),slidertype:"videoslide"}:light.isStore?light.data[t]={responsive:lightboximg_responsive_size,src:lightboximg_size,thumb:light.cdn+e.photo_500,jcrop:e.photo_300?"1":"0",_photoid:e.id,_galleryid:e.galleryid,downloadurl:{500:e.photo_500,1200:e.photo_1200,2000:e.largepath,original:e.originalpath},tweetText:"@pixpa",pinterestText:"pinterest text",photoinfotitle:$.trim(e.title),photoinfodesc:$.trim(e.photodesc),photofilename:e.filename,slidertype:"imgslide",fileExtension:e.extension}:light.data[t]={src:"",text:e.photodesc,thumb:"/img/text-slide-placeholder.jpg",_photoid:e.id,_galleryid:e.galleryid,photoinfotitle:"",photoinfodesc:$.trim(e.photodesc),slidertype:"textslide"},light.data[t].galleryid=e.galleryid,caption&&(""!=$.trim(e.title)||""!=$.trim(e.photodesc)&&3!=e.type))if("caption"==userObject.slideshowImageMode)if("<p>&#8203;</p>"==e.photodesc||"<p>&#65279;</p>"==e.photodesc||""==e.photodesc||"<p></p>"==e.photodesc||"<p></p><p>\ufeff</p>"==e.photodesc)null==e.title?light.data[t].subHtml="":light.data[t].subHtml="<b>"+e.title+"</b>";else{var o="";if(""!=e.title&&null!=e.title)o='<p class="js-gallery-title-content"><b>'+e.title+"</b></p>";else o="";light.data[t].subHtml=o+"<div class='js-jssor-hiphen'>-</div><span class='js-gallery-desc-content'>"+e.photodesc+"</span>"}else{o="";var i="";if(""!=e.title&&void 0!==e.title&&null!=e.title)o='<p class="js-gallery-title-content"><b>'+e.title+"</b></p>";else o="";if(""!=e.photodesc&&"<p>&#8203;</p>"!=e.photodesc&&"<p>&#65279;</p>"!=e.photodesc&&"<p></p>"!=e.photodesc&&"<p></p><p>\ufeff</p>"!=e.photodesc){if("<p>\ufeff</p>"!=e.photodesc)i=e.photodesc;else i=""}else if(""!=e.photodesc)i="";light.data[t].subHtml=o+"<span class='js-gallery-desc-content'>"+i+"</div>"}else light.data[t].subHtml=""})},light.init=function(t){light.options={inside:"#container_slider",speed:400,startClass:"",mode:transition_type,height:"100%",index:t,preload:2,counter:counter,download:download,favorite:favorite,store:store,comments:comments,fotomoto:fotomoto,addClass:captionright,galleryIcon:galleryIcon,photoInfo:photoInfo,photofilename:photofilename,cssEasing:"ease",easing:"linear",mousewheel:!0,fullScreen:!0,fillMode:fillMode,share:share,zoom:zoom,fullScreen:fullscreen,autoplayControls:autoplayControls,fourceAutoplay:fourceautoplay,progressBar:progressBar,pause:transition_speed,youtubePlayerParams:{autoplay:0,enablejsapi:0},hideBarsDelay:hideBarsDelay,controls:controls,escKey:escKey,closable:!1,closeButton:closeButton,enableSwipe:captionenableSwipe,enableDrag:captionenableDrag,thumbnail:thumbnail,autoplay:autoplay,actualSize:actualSize,loadYoutubeThumbnail:!0,youtubeThumbSize:"default",loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_medium",hash:!1,dynamic:!0,dynamicEl:light.data},console.log(light.options),"object"==typeof window.lgObj&&window.lgObj.destroy(!0),light.obj=$(light.div).lightGallery(light.options),$(".js-overlay-container").addClass("overlay-active")},light.launch=function(){var t=0;$("body").unbind("click",".js-grid-item"),$("body").on("click",".js-grid-item",function(e){window.scroll_img_id=$(window).scrollTop(),void 0!==$(this).attr("data-index")&&(t=parseInt($(this).attr("data-index"))),light.init(t),setTimeout(function(){$("body").addClass("lg-overflow-hidden")},100),1==light.searchPage&&setTimeout(function(){$("#container_slider").find(".lg").removeClass("option-type-thumbnail")},100)})},light.storeLaunch=function(){var t=0;$("body").unbind("click",".demo-gallery"),$("body").on("click",".demo-gallery>a",function(e){void 0!==$(this).attr("data-index")&&(t=parseInt($(this).attr("data-index"))),light.init(t),setTimeout(function(){$("body").addClass("lg-overflow-hidden")},100)})},light.vscrollLaunch=function(){var t=0;$("body").unbind("click",".js-slideshow-item"),$("body").on("click",".js-slideshow-item",function(e){void 0!==$(this).attr("data-index")&&(t=parseInt($(this).attr("data-index"))),light.init(t),window.scroll_img_id=$(window).scrollTop(),setTimeout(function(){$("body").addClass("lg-overflow-hidden")},100)})},light.appendUrl=function(t){let e=new URLSearchParams(window.location.search);if(queryParam=e||"",currentPhotoId=light.data[t]._photoid,""!=userObject.imageUrl)history.pushState({},"Image Url",currentPhotoId+"-"+userObject.userId+"-photo-"+t);else{var o=window.location.pathname,i=(o=o.endsWith("/")?o.slice(0,-1):o).split("/"),l=i.length,n=new RegExp("-"+userObject.userId+"-photo-");if(i[l-1].match(n)&&(l=i.length-1),"/"!=(i=i.splice(0,l).join("/"))[i.length-1])var s=i+"/";else s="/";history.replaceState({},"Image Url",s+currentPhotoId+"-"+userObject.userId+"-photo-"+t)}userObject.imageUrl=s+currentPhotoId+"-"+userObject.userId+"-photo-"+t},light.imgoption=function(){light.userdata.isClientproofing&&$("#container_slider").find(".lg-toolbar").addClass("show-proffing-option"),"image"==userObject.slideshowImageMode?($("#container_slider").find(".lg-inner").addClass("show-image-only"),$("#container_slider").find(".lg").addClass(userObject.onloadType),$("#container_slider").find(".lg").addClass("option-type-image"),setTimeout(function(){$("#container_slider").find(".lg").removeClass("justified-gallery")},100),light.userdata.isClientproofing||light.userdata.isClientgalleries||$("#container_slider").find(".lg-inner").addClass("show-image-only-desktop"),$("#container_slider").find(".lg-outer").addClass(userObject.controls)):"thumbnail"==userObject.slideshowImageMode?($("#container_slider").find(".lg").addClass(userObject.onloadType),$("#container_slider").find(".lg").addClass("option-type-thumbnail"),$("#container_slider").find(".lg-inner").addClass("show-image-thumbnail"),$("#container_slider").find(".lg-outer").addClass(userObject.controls),1==light.searchPage&&$("#container_slider").find(".lg").removeClass("option-type-thumbnail"),setTimeout(function(){$("#container_slider").find(".lg").removeClass("justified-gallery")},100)):"caption"==userObject.slideshowImageMode?($("#container_slider").find(".lg").addClass(userObject.onloadType),$("#container_slider").find(".lg").addClass("option-type-caption"),$("#container_slider").find(".lg-inner").addClass("show-image-caption-bottom"),$("#container_slider").find(".lg-outer").addClass(userObject.controls),setTimeout(function(){$("#container_slider").find(".lg").removeClass("justified-gallery")},100)):"caption-right"==userObject.slideshowImageMode&&($("#container_slider").find(".lg").addClass(userObject.onloadType),$("#container_slider").find(".lg-inner").addClass("show-image-caption-right"),$("#container_slider").find(".lg").addClass("option-type-caption-right"),$("#container_slider").find(".lg-outer").addClass(userObject.controls),setTimeout(function(){$("#container_slider").find(".lg").removeClass("justified-gallery")},100)),"fixed"==userObject.controls_arrow?setTimeout(function(){$(".lg-actions").addClass("arrow-fixed")},50):"floating"==userObject.controls_arrow?setTimeout(function(){$(".lg-actions").addClass("arrow-floating")},50):"no-arrows"==userObject.controls_arrow&&setTimeout(function(){$(".lg-actions").addClass("arrow-hide")},50),"hide"==userObject.controls&&setTimeout(function(){$(".lg-prev, .lg-next").addClass("hide-arrow")},50)},light.photoInfo=function(t){var e,o,i;(e=light.data[t].photoinfotitle,o=light.data[t].photoinfodesc,slidertype=light.data[t].slidertype,"textslide"==slidertype?$("#container_slider").find(".lg-toolbar").addClass("textslide"):$("#container_slider").find(".lg-toolbar").removeClass("textslide"),"imgslide"==slidertype?$("#container_slider").find(".js-buy-icon").show():$("#container_slider").find(".js-buy-icon").hide(),light.userdata.isClientproofing)&&(i=light.data[t].photofilename,$("#container_slider").find(".lg").find(".proofing-photoname").remove(),light.userdata.showFilename&&$("#container_slider").find(".lg").append("<div class='proofing-photoname'>"+i+"</div>"));"slideshow"==userObject.onloadType&&"single_image"!=userObject.slideshowLayout&&"horizontal_slider"!=userObject.slideshowLayout&&"horizontal_scroll"!=userObject.slideshowLayout&&"vertical_slider"!=userObject.slideshowLayout&&"vertical_slider_detailed"!=userObject.slideshowLayout?(""==e&&""==o?$(".js-photo-info-btn").hide():$(".js-photo-info-btn").show(),$("body").on("click","#js-photo-info-btn-"+t,function(){$("body").append("<div id='featherlight-"+t+"' class='featherlight'><div class='featherlight-content'><span class='featherlight-close-icon featherlight-close'><span class='menu-svg-icon'><svg viewBox='0 0 320 512'><use xlink:href='#times-pixpa-icon' width='320' height='512'></use></svg></span></span><div class='u"+userObject.userId+"-primary-text-modal'>"+e+"</div><div class='photo-info-desc u"+userObject.userId+"-secondary-text-modal'>"+o+"</div></div></div>"),$(".featherlight").show()})):$(window).innerWidth()<=767?(""==e&&""==o?$(".js-photo-info-btn").hide():$(".js-photo-info-btn").show(),$("body").on("click","#js-photo-info-btn-"+t,function(){$("body").append("<div id='featherlight-"+t+"' class='featherlight'><div class='featherlight-content'><span class='featherlight-close-icon featherlight-close'><span class='menu-svg-icon'><svg viewBox='0 0 320 512'><use xlink:href='#times-pixpa-icon' width='320' height='512'></use></svg></span></span><div class='u"+userObject.userId+"-primary-text-modal'>"+e+"</div><div class='photo-info-desc u"+userObject.userId+"-secondary-text-modal'>"+o+"</div></div></div>"),$(".featherlight").show()})):(""==e&&""==o?$(".js-photo-info-btn, .js-photo-info-btn-close").hide():""!=e||""!=o&&"<p></p>"!=o?$(".js-photo-info-btn, .js-photo-info-btn-close").show():$(".js-photo-info-btn, .js-photo-info-btn-close").hide(),$("body").unbind("click",".js-photo-info-btn"),$("body").on("click",".js-photo-info-btn",function(){$("body").find(".lg-outer").addClass("fb-comments"),$(this).addClass("js-photo-info-btn-close"),$(this).removeClass("js-photo-info-btn"),$("#container_slider").find(".lg").addClass("caption-show"),$("#container_slider").find(".lg-outer .lg-thumb-outer").css("right","250px")}),$("body").unbind("click",".js-photo-info-btn-close"),$("body").on("click",".js-photo-info-btn-close",function(){$("body").find(".lg-outer").removeClass("fb-comments"),$(this).addClass("js-photo-info-btn"),$(this).removeClass("js-photo-info-btn-close"),$("#container_slider").find(".lg").removeClass("caption-show"),$("#container_slider").find(".lg-outer .lg-thumb-outer").css("right","")}),$("body").unbind("click",".js-photo-info-btn-desc-close"),$("body").on("click",".js-photo-info-btn-desc-close",function(){$("body").find(".lg-outer").removeClass("fb-comments"),$("body").find(".lg-photo-info").addClass("js-photo-info-btn"),$("body").find(".lg-photo-info").removeClass("js-photo-info-btn-close"),$("#container_slider").find(".lg").removeClass("caption-show"),$("#container_slider").find(".lg-outer .lg-thumb-outer").css("right","")}))},light.removeUrl=function(){var t=window.location.pathname.split("/"),e=t.length,o=new RegExp("-"+userObject.userId+"-photo-");t[e-1].match(o)&&(e=t.length-1),t=t.splice(0,e).join("/"),""!=queryParam&&(t=t+"?"+queryParam),history.replaceState({},"Image Url",window.location.origin+t),userObject.imageUrl="",window.lgIndex=0},light.appenddownload=function(t){if("function"==typeof light.checkDownloadStatus&&light.checkDownloadStatus(t),"function"==typeof light.checkStoreStatus&&light.checkStoreStatus(t),"function"==typeof light.checkFavouritesStatus&&light.checkFavouritesStatus(t),"function"==typeof light.checkFotomotoStatus&&light.checkFotomotoStatus(t),light.userdata.isClientproofing&&light.userdata.isClientdownload&&""!=light.userdata.isClientdownloadstatus){$("#lg-download").unbind("click"),$("#container_slider").find("#lg-download").find(".js-download-dropdown-menu").remove();var e=$("#download-template").html();$(e).find(".gallery-download-all .dropdown li[value='small']").attr("data-value",$("#container_slider").find("#lg-download").attr("data-photo500")),$(e).find(".gallery-download-all .dropdown li[value='medium']").attr("data-value",$("#container_slider").find("#lg-download").attr("data-photo1200")),$(e).find(".gallery-download-all .dropdown li[value='large']").attr("data-value",$("#container_slider").find("#lg-download").attr("data-photo2000")),$(e).find(".gallery-download-all .dropdown li[value='original']").attr("data-value",$("#container_slider").find("#lg-download").attr("data-photooriginal")),$("#container_slider").find("#lg-download").append(e),$("#lg-download").unbind("click"),$("#lg-download").on("click",function(){void 0!==light.userdata.clientslug&&$("#container_slider").find("#lg-download").find(".js-download-photos-form").attr("action","/site/"+light.userdata.clientslug+"/"+light.data[t].galleryid+"/download"),$(this).find(".js-download-dropdown-menu").toggleClass("active")})}},light.retainState=function(){if("grid"==userObject.onloadType&&userObject.imageUrl.indexOf("-photo-")>=0){var t=userObject.imageUrl.split("-photo-");if("object"==typeof t&&void 0!==t[1]){var e=parseInt(t[1]);e<=light.data.length-1&&(light.init(e),setTimeout(function(){$("body").addClass("lg-overflow-hidden")},100))}}},light.fotomotoInit=function(t){void 0!==light.options&&void 0!==light.options.fotomoto&&!0===light.options.fotomoto&&($(".js-buy-icon").unbind("click"),$(".js-buy-icon").on("click",function(){var t,e;if(t=$(this).attr("data-fotourl"),e=$(this).attr("data-filename"),void 0===t||void 0===e||""==t||""==e)return!1;"undefined"==typeof FOTOMOTO?setTimeout(function(){FOTOMOTO.API.showWindow(FOTOMOTO.API.PRINT,{url:t,pickup_filename:e})},2e3):FOTOMOTO.API.showWindow(FOTOMOTO.API.PRINT,{url:t,pickup_filename:e})}))},light.lightGallery=function(){light.initOptions(),light.config(),light.launch(),light.storeLaunch(),light.retainState(),light.vscrollLaunch(),$(light.div).unbind("onCloseAfter.lg"),$(light.div).on("onCloseAfter.lg",function(t){light.removeUrl()}),$(light.div).unbind("onSlideItemLoad.lg"),$(light.div).on("onSlideItemLoad.lg",function(t){"function"==typeof ImageRightClickDisable&&ImageRightClickDisable(),setTimeout(function(){$("#container_slider").find(".lg").removeClass("justified-gallery")},100)}),$(light.div).unbind("onAfterOpen.lg"),$(light.div).on("onAfterOpen.lg",function(t){"function"==typeof light.fotomotoInit&&light.fotomotoInit()})};
