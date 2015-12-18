jQuery( document ).ready(function( $ ) {
	var infobox_bg_url = "https:\/\/lh4.googleusercontent.com\/nr01-F6eM6Mb09CuDZBLvnxzpyRMpWQ0amrS593Rb7Q=w1200";

	$("#nanoGallery").nanoGallery({
		locationHash: 1,
		viewerDisplayLogo: false,
		//thumbnailHeight può essere anche auto
		thumbnailHeight: "auto",
		thumbnailWidth: "226",
		maxItemsPerLine: 0,
		maxWidth: 0,
		touchAnimation: 1,
		galleryToolbarWidthAligned: 1,
		slideshowDelay: 3000,
		/*paginationMaxItemsPerPage: 0,*/
		paginationMaxLinesPerPage: 0,
		thumbnailDisplayInterval: 0,
		thumbnailDisplayTransition: 1,
		thumbnailLazyLoad: 1,
		thumbnailLazyLoadTreshold: 250,

		viewer: "internal",
		thumbnailLabel: {"position":"overImageOnBottom","display":1,"displayDescription":1,"titleMaxLength":25,"descriptionMaxLength":25,"hideIcons":1,"align":"left","itemsCount":"title"},
						
		viewerToolbar: {"display":true,"position":"bottom","style":"innerImage","autoMinimize":800,"standard":"minimizeButton,previousButton,pageCounter,nextButton,playPauseButton,fullscreenButton,infoButton,shareButton,closeButton,label","minimized":"minimizeButton,label"},
						
		RTL: false,
						
						
		galleryFullpageButton:false,
		thumbnailGutterWidth:5,
		thumbnailGutterHeight:5,
		thumbnailAlignment:"center",
						
		showInfoBoxButton: true,
		showInfoBoxAlbum: true,
		showInfoBoxPhoto: true,
		showInfoBoxDate: true,
		showInfoBoxDimensions: true,
		showInfoBoxFilename: true,
		showInfoBoxFilesize: true,
		showInfoBoxCamera: true,
		showInfoBoxFocallength: true,
		showInfoBoxFNumber: true,
		showInfoBoxExposure: true,
		showInfoBoxISO: true,
		showInfoBoxMake: true,
		showInfoBoxFlash: true,
		showInfoBoxViews: true,
		showInfoBoxComments: true,
		showInfoBoxLink: true,
		showInfoBoxDownload: true,
		infoboxBgUrl: infobox_bg_url,
						
		thumbnailHoverEffect: "scale120",
		theme: "light",
		colorScheme: "light",
		colorSchemeViewer: "light",
		
		imageTransition: "swipe",

		kind: "picasa",
		userID: "110690507571411051555",
		displayBreadcrumb: 1,
		blackList: "Scrapbook|profil|2013-",
		whiteList: "",
		photoSorting: "standard",
		albumSorting: "standard",
		albumList:"Italy 21-12-2014 - Bisceglie - General Qi Gong|Romania 07-09-2014 -  Bucharest - Special V.I.P. Private Class|Italy 27-07-2014 - Bisceglie - Workshop Taoist Basic and Tai Chi Qi Gong 1|China 11-07-2014 - Guang Zhou - Workshop of Taoist Basic Knowledge|Teaching in Tao Garden at Chiang Mai, Thailand 04-02-2014|Thailand 08-01-2014 - Chiang Mai - Teaching Police Forces|Taching Tao Kung Fu System to Thai Police at Chiang Mai, Thailand 25-12-2013|China 29-11-2013 - Hang Zhou - Teaching Basic Taoist Workshop|Teaching Taoist Workshop in Guang Zhou, China 09-10-2013|Workshop of Iron Shirt 1 at Bisceglie, Italy 16-06-2013|Teaching Basic Taoist Knowledge in Shanghai, China 18-05-2013|Spiritual Taoist Teaching organized by Bangkok Bank in Bangkok, Thailand 11-05-2013|Teaching Basic Taoist Workshop in Shanghai, China 25-03-2013|Basic Qi Gong Workshop in Kunming, China 20-03-2013|China 14-03-2013 - Kunming - Presentation of the Workshop|Thailand 23-03-2012 - Tao Kung Fu System Workshop Retreat at Tao Garden,|Teaching Morning General Qi Gong Class at Tao Garden, Thailand 10-012012|Italy - Bisceglie - 11-09-2011 - Iron Shirt ! Workshop|Italy - Bisceglie - 22-05-2011 - TKFS Basic Taoist Practices Workshop|Thailand 18-03-2011 - Pai - Tai Chi Qi Gong & TaoKungFu|Teaching TKFS Basic Taoist Practices in Pattaya, Thailand 27-10-2009|Teaching TKFS Basic Taoist Practices in Pattaya, Thailand 11-10-2009|Teaching TKFS Basic Taoist Practices in Pattaya Private Class, Thailand 24-10-2009|Turkey - General Qi Gong and Tai Chi Qi Gong 1 - 2014-12-24|Italy - General Qi Gong - 2014-12-24",
		i18n:{
			'paginationPrevious':"Prev",
            'paginationNext':"Next",		
	        'infoBoxPhoto':"Photo",
	        'infoBoxDate':"Date",
	        'infoBoxAlbum':"Album",
	        'infoBoxDimensions':"Dimensions",
	        'infoBoxFilename':"Filename",
	        'infoBoxFileSize':"File size",
	        'infoBoxCamera':"Camera",
	        'infoBoxFocalLength':"Focal length",
	        'infoBoxExposure':"Exposure",
	        'infoBoxFNumber':"F Number",
	        'infoBoxISO':"ISO",
	        'infoBoxMake':"Make",
	        'infoBoxFlash':"Flash",
	        'infoBoxViews':"Views",
	        'infoBoxComments':"Comments"	        
	        }				

	});
	if (infobox_bg_url){
		nano_preload_imageObj = new Image();
		nano_preload_imageObj.src = infobox_bg_url;
	}

});
