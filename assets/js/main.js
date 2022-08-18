(function($){"use strict";$.exists=function(selector){return $(selector).length>0};$(window).on("load",function(){$(window).trigger("scroll");$(window).trigger("resize");preloaderSetup();isotopMsSetup()});$(document).on("ready",function(){$(window).trigger("resize");mobileMenu();scrollFunction();menuFunction();modalVideo();backgroundImage();owlCarouselSetup();progressBar();contactForm();contactForm1();isotopMsSetup();stickyFooter();tamjidCounterSetup();mapBar();new WOW().init()});$(window).on("resize",function(){mobileMenu();isotopMsSetup();stickyFooter()});$(window).on("scroll",function(){scrollFunction()});function preloaderSetup(){$(".st-preloader-wave").fadeOut();$("#st-preloader").delay(1).fadeOut("slow")}
function menuFunction(){$('.st-nav-toggle').on('click',function(){$(this).siblings('.st-nav').slideToggle();$(this).toggleClass('st-active')});$('.st-has-children').append('<span class="st-dropdown-btn"></span>');$('.st-dropdown-btn').on('click',function(){$(this).siblings('ul, .st-megamenu-in, .st-vertical-megamenu-in').slideToggle('slow');$(this).toggleClass('st-active')});var megaTabEnd=0;var e;$('.st-sub-megamenu-list li').on({mouseenter:function(){var $this=$(this);if(megaTabEnd||$this.hasClass('active'))return!1;megaTabEnd=1;$this.siblings('.active').removeClass('active');$this.addClass('active');var index=$this.parent().parent().find('.st-sub-megamenu-list li').index(this);$this.closest('.st-megamenu-in').find('.st-sub-megamenu-in.active').fadeOut(200,function(){$(this).removeClass('active');$this.closest('.st-megamenu-in').find('.st-sub-megamenu-in').eq(index).fadeIn(200,function(){megaTabEnd=0;$(this).addClass('active')})})},mouseleave:function(){$('.st-sub-megamenu-list li').siblings('.active').removeClass('active').addClass('active')}});$('.st-header .st-mobile-nav a').on('click',function(){$('.st-nav').slideUp();$('.st-nav-toggle').removeClass('st-active')})}
function mobileMenu(){if($(window).width()<=991){$('.st-header').addClass('st-mobile-header');$('.st-nav, .st-vertical-nav-wrap').addClass('st-mobile-nav').removeClass('st-desktop-nav')}else{$('.st-header').removeClass('st-mobile-header');$('.st-nav, .st-vertical-nav-wrap').addClass('st-desktop-nav').removeClass('st-mobile-nav')}}
function scrollFunction(){var scroll=$(window).scrollTop();if(scroll>=10){$('.st-header').addClass('st-sticky-active');$('.st-sticky-menu .st-desktop-nav .st-vertical-nav-list').slideUp();$('.st-vertical-nav-btn').removeClass('st-vertical-nav-perform')}else{$('.st-header').removeClass('st-sticky-active');$('.st-sticky-menu .st-desktop-nav .st-vertical-nav-list').slideDown();$('.st-vertical-nav-btn').addClass('st-vertical-nav-perform')}}
$('.smooth-scroll').on('click',function(){var thisAttr=$(this).attr('href');if($(thisAttr).length){var scrollPoint=$(thisAttr).offset().top-50;$('body,html').animate({scrollTop:scrollPoint},600)}
return!1});var topLimit=300,ultimateOffset=200;$('.onepage-nav').each(function(){var $this=$(this),$parent=$this.parent(),current=null,$findLinks=$this.find("a");function getHeader(top){var last=$findLinks.first();if(top<topLimit){return last}
for(var i=0;i<$findLinks.length;i++){var $link=$findLinks.eq(i),href=$link.attr("href");if(href.charAt(0)==="#"&&href.length>1){var $anchor=$(href).first();if($anchor.length>0){var offset=$anchor.offset();if(top<offset.top-ultimateOffset){return last}
last=$link}}}
return last}
$(window).on("scroll",function(){var top=window.scrollY,height=$this.outerHeight(),max_bottom=$parent.offset().top+$parent.outerHeight(),bottom=top+height+ultimateOffset;var $current=getHeader(top);if(current!==$current){$this.find(".active").removeClass("active");$current.addClass("active");current=$current}})});function modalVideo(){$(document).on('click','.st-video-open',function(e){e.preventDefault();var video=$(this).attr('href');$('.st-video-popup-container iframe').attr('src',video);$('.st-video-popup').addClass('active')});$('.st-video-popup-close, .st-video-popup-layer').on('click',function(e){$('.st-video-popup').removeClass('active');$('html').removeClass('overflow-hidden');$('.st-video-popup-container iframe').attr('src','about:blank')
e.preventDefault()})}
function backgroundImage(){if($.exists(".st-bg")){$(".st-bg").each(function(){var src=$(this).attr("data-src");$(this).css({"background-image":"url("+src+")"})})}}
function owlCarouselSetup(){if($.exists('.st-hero-slider1')){$('.st-hero-slider1').owlCarousel({items:1,loop:!0,margin:0,nav:!0,navText:['<i class="flaticon-left"></i>PREV','NEXT<i class="flaticon-right"></i>'],dots:!1,autoplay:!1,autoplayHoverPause:!1,smartSpeed:500,autoplayTimeout:5000})}
if($.exists('.st-service-carousel')){$('.st-service-carousel').owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,navText:['<i class="flaticon-left"></i>','<i class="flaticon-right"></i>'],autoplay:!1,smartSpeed:1000,autoplayTimeout:5000,responsive:{0:{items:1},767:{items:2},991:{items:3}}})}
if($.exists('.st-client-carousel')){$('.st-client-carousel').owlCarousel({loop:!0,margin:30,nav:!1,navText:!1,autoplay:!0,autoPlaySpeed:1500,smartSpeed:1000,responsive:{0:{items:2},600:{items:3},800:{items:4},1000:{items:5}}})}
if($.exists('.st-project-carousel')){$('.st-project-carousel').owlCarousel({loop:!0,margin:30,nav:!1,navText:!1,dots:!0,autoplay:!1,smartSpeed:500,autoplayTimeout:4000,responsive:{0:{items:1},575:{items:2},767:{items:3},991:{items:4}}})}
if($.exists('.st-member-carousel')){$('.st-member-carousel').owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,navText:['<i class="flaticon-left"></i>','<i class="flaticon-right"></i>'],autoplay:!1,smartSpeed:500,autoplayTimeout:4000,responsive:{0:{items:1},575:{items:2},991:{items:3},1199:{items:4}}})}
if($.exists('.st-testimonial-slider')){$('.st-testimonial-slider').owlCarousel({items:1,loop:!0,margin:0,nav:!0,navText:['<i class="flaticon-left"></i>','<i class="flaticon-right"></i>'],dots:!1,autoplay:!1,autoplayHoverPause:!1,smartSpeed:500,autoplayTimeout:5000})}}
function progressBar(){$(".st-progressbar").each(function(){var progressPercentage=$(this).data("progress-percentage")+"%";progressPercentage="calc("+progressPercentage+" - 4px)";$(this).find(".st-progressbar-in").css("width",progressPercentage)})}
if($.exists('.mailchimp')){if($('.mailchimp').length>0){$('.mailchimp').ajaxChimp({language:'es',callback:mailchimpCallback})}
function mailchimpCallback(resp){if(resp.result==='success'){$('.subscription-success').html('<i class="fa fa-check"></i><br/>'+resp.msg).fadeIn(1000);$('.subscription-error').fadeOut(500)}else if(resp.result==='error'){$('.subscription-error').html('<i class="fa fa-times"></i><br/>'+resp.msg).fadeIn(1000)}}
$.ajaxChimp.translations.es={'submit':'Submitting...',0:'Nous vous avons envoyé un e-mail de confirmation',1:'entrer un nombre, SVP',2:'Une adresse e-mail doit contenir un seul @',}}
function contactForm1(){$('#cp-msg').hide();$('#cp #submit1').on('click',function(){var namep=$('#namep').val();var prenomp=$('#prenomp').val();var pr=$('#pr').val();namep=$.trim(namep);prenomp=$.trim(prenomp);pr=$.trim(pr);if(namep!=''){var values="namep="+namep+" &prenomp="+prenomp+" &pr="+pr;$.ajax({type:"POST",url:"assets/php/postule.php",data:values,success:function(){$('#namep').val('');$('#prenomp').val('');$('#pr').val('');$('#cp-msg').fadeIn().html('<div class="alert alert-success"><strong>Succès!</strong>Le courriel a été envoyé avec succès.</div>');setTimeout(function(){$('#cp-msg').fadeOut('slow')},4000)}})}else{$('#cp-msg').fadeIn().html('<div class="alert alert-danger"> Tous les champs sont requis.</div>')}
return!1})}
function contactForm(){$('#cf-msg').hide();$('#cf #submit').on('click',function(){var name=$('#name').val();var sujet=$('#sujet').val();var email=$('#email').val();var msg=$('#msg').val();var prenom=$('#prenom').val();var entreprise=$('#entreprise').val();var fonction=$('#fonction').val();var motif=$('#motif').val();var pays=$('#pays').val();var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(!regex.test(email)){$('#cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Avertissement!</strong> Veuillez saisir une adresse e-mail valide.</div>');return!1}
name=$.trim(name);sujet=$.trim(sujet);email=$.trim(email);msg=$.trim(msg);prenom=$.trim(prenom);entreprise=$.trim(entreprise);fonction=$.trim(fonction);motif=$.trim(motif);pays=$.trim(pays);if(name!=''&&email!=''&&msg!=''){var values="name="+name+"&sujet="+sujet+"&email="+email+" &msg="+msg+" &prenom="+prenom+" &entreprise="+entreprise+" &fonction="+fonction+" &motif="+motif+" &pays="+pays;$.ajax({type:"POST",url:"assets/php/mail.php",data:values,success:function(){$('#name').val('');$('#sujet').val('');$('#email').val('');$('#msg').val('');$('#prenom').val('');$('#entreprise').val('');$('#fonction').val('');$('#motif').val('');$('#pays').val('');$('#cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Succès!</strong>Le courriel a été envoyé avec succès.</div>')}})}else{$('#cf-msg').fadeIn().html('<div class="alert alert-danger"> Tous les champs sont requis.</div>')}
return!1})}
function isotopMsSetup(){if($.exists('.st-isotop')){$('.st-isotop').isotope({itemSelector:'.st-isotop-item',transitionDuration:'0.60s',percentPosition:!0,masonry:{columnWidth:'.st-grid-sizer'}});$('.st-isotop-filter ul li').on('click',function(event){$(this).siblings('.active').removeClass('active');$(this).addClass('active');event.preventDefault()});$('.st-isotop-filter ul').on('click','a',function(){var filterElement=$(this).attr('data-filter');$(this).parents('.st-isotop-filter').next().isotope({filter:filterElement})})}}
function stickyFooter(){var footerHeight=($('.st-sticky-footer').height());var windowHeight=$(window).height();var footerHeightPx=footerHeight+'px';$('.st-content').css("margin-bottom",footerHeightPx)}
function tamjidCounterSetup(){$('.st-counter').tamjidCounter({duration:2000})}
function mapBar(){$('.st-map-bar').on('click',function(){$(this).toggleClass('st-bar-active').siblings('.st-map-wrpa').slideToggle()})}})(jQuery)