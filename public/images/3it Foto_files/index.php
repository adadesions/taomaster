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
		albumList:"General Qi Gong at Bisceglie, Italy 21-12-2014|Workshop of Iron Shirt 1 at Bisceglie, Italy 16-06-2013|Italy - General Qi Gong - 2014-12-24|Italy Retreat 25-07-2014",
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
