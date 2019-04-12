require.config({
	enforceDefine: true,
	paths:{
		// Aliases and paths of modules
		'angular': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular',
			'../node_modules/angular/angular'
		],
		'angular-route': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular-route',
			'../node_modules/angular-route/angular-route'
		],
		'angular-datatables': [
			'//cdn.rawgit.com/l-lin/angular-datatables/v0.6.4/dist/angular-datatables',
			'../node_modules/angular-datatables/dist/angular-datatables'
		],
		'angular-datatables.bootstrap': [
			'//cdn.rawgit.com/l-lin/angular-datatables/v0.6.4/dist/plugins/bootstrap/angular-datatables.bootstrap',
			'../node_modules/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap'
		],
		'angular-resource': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular-resource',
			'../node_modules/angular-resource/angular-resource'
		],
		'angular-ui-router': [
			'//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.20/angular-ui-router',
			'../node_modules/angular-ui-router/release/angular-ui-router'
		],
		'angular-ui-bootstrap': [
			'//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls',
			'../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls'
		],
		'datatables': [
			'//cdn.datatables.net/1.10.19/js/jquery.dataTables.min',
			'../node_modules/datatables.net/js/jquery.dataTables'
		],
		'jquery': [
			'//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min',
			'../node_modules/jquery/dist/jquery'
		]
	},
	shim:{
		// Modules and their dependent modules
		'angular': { exports: 'angular', deps: ['jquery'] },
		'angular-route': { exports: 'angular', deps: ['angular'] },
		'angular-datatables': { exports: 'angular', deps: ['angular','datatables'] },
		'angular-datatables.bootstrap': { exports: 'angular', deps: ['angular-datatables'] },
		'angular-resource': { exports: 'angular', deps: ['angular'] },
		'angular-ui-router': { exports: 'angular', deps: ['angular'] }
	},
	deps: ['jquery', './bootstrap'],
	priority: ['angular']
});
define([],function () {});