require.config({
	paths : {
		"jquery" : "./jquery/jquery-2.1.1.min",
		"jqueryCookie" : "./jquery.cookie",
		"global": "./global",
		"form" : 'jquery/jquery.form'
		
	},
	shim : {
		"jqueryCookie" : ["jquery"]
	}
});


