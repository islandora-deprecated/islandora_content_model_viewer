Ext.data.JsonP.Ext_data_proxy_Server({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.proxy.Proxy"
  ],
  "inheritable": false,
  "subclasses": [
    "Ext.data.proxy.JsonP",
    "Ext.data.proxy.Ajax",
    "Ext.data.proxy.Direct"
  ],
  "deprecated": null,
  "allMixins": [
    "Ext.util.Observable"
  ],
  "href": "Server.html#Ext-data-proxy-Server",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-api",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". ...",
        "static": false,
        "name": "api",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\".\nDefaults to:</p>\n\n<pre><code>api: {\n    create  : undefined,\n    read    : undefined,\n    update  : undefined,\n    destroy : undefined\n}\n</code></pre>\n\n\n<p>The url is built based upon the action being executed <tt>[create|read|update|destroy]</tt>\nusing the commensurate <tt><a href=\"#/api/Ext.data.proxy.Server-cfg-api\" rel=\"Ext.data.proxy.Server-cfg-api\" class=\"docClass\">api</a></tt> property, or if undefined default to the\nconfigured <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.<a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n\n\n<br>\n\n\n<p>For example:</p>\n\n\n<pre><code>api: {\n    create  : '/controller/new',\n    read    : '/controller/load',\n    update  : '/controller/update',\n    destroy : '/controller/destroy_action'\n}\n</code></pre>\n\n\n<p>If the specific URL for a given CRUD action is undefined, the CRUD action request\nwill be directed to the configured <tt><a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a></tt>.</p>\n\n",
        "linenr": 98,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchActions",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "True to batch actions of a particular type when synchronizing the store. ...",
        "static": false,
        "name": "batchActions",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>True to batch actions of a particular type when synchronizing the store.\nDefaults to <tt>true</tt>.</p>\n",
        "linenr": 61,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchOrder",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. ...",
        "static": false,
        "name": "batchOrder",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this\nto set a different order for the batched CRUD actions to be executed in. Defaults to 'create,update,destroy'</p>\n",
        "linenr": 54,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-cacheString",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "static": false,
        "name": "cacheString",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the cache param added to the url when using noCache (defaults to \"_dc\")</p>\n",
        "linenr": 87,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-directionParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the direction parameter to send in a request. ...",
        "static": false,
        "name": "directionParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the direction parameter to send in a request. <strong>This is only used when simpleSortMode is set to true.</strong>\nDefaults to 'dir'.</p>\n",
        "linenr": 69,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-extraParams",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Extra parameters that will be included on every request. ...",
        "static": false,
        "name": "extraParams",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Extra parameters that will be included on every request. Individual requests with params\nof the same name will override these params when they are in conflict.</p>\n",
        "linenr": 144,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-filterParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'filter' parameter to send in a request. ...",
        "static": false,
        "name": "filterParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set\nthis to undefined if you don't want to send a filter parameter</p>\n",
        "linenr": 63,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-groupParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'group' parameter to send in a request. ...",
        "static": false,
        "name": "groupParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this\nto undefined if you don't want to send a group parameter</p>\n",
        "linenr": 51,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-limitParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'limit' parameter to send in a request. ...",
        "static": false,
        "name": "limitParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this\nto undefined if you don't want to send a limit parameter</p>\n",
        "linenr": 45,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "type": "String/Ext.data.Model",
        "deprecated": null,
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-model",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "The name of the Model to tie to this Proxy. ...",
        "static": false,
        "name": "model",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>The name of the Model to tie to this Proxy. Can be either the string name of\nthe Model, or a reference to the Model constructor. Required.</p>\n",
        "linenr": 79,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-noCache",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "(optional) Defaults to true. ...",
        "static": false,
        "name": "noCache",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>(optional) Defaults to true. Disable caching by adding a unique parameter\nname to the request.</p>\n",
        "linenr": 81,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-pageParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'page' parameter to send in a request. ...",
        "static": false,
        "name": "pageParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to\nundefined if you don't want to send a page parameter</p>\n",
        "linenr": 33,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Object/String/Ext.data.reader.Reader",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-reader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The Ext.data.reader.Reader to use to decode the server's response. ...",
        "static": false,
        "name": "reader",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> to use to decode the server's response. This can\neither be a Reader instance, a config object or just a valid Reader type name (e.g. 'json', 'xml').</p>\n",
        "linenr": 23,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-simpleSortMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a remote...",
        "static": false,
        "name": "simpleSortMode",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a remote sort is requested.\nThe directionParam and sortParam will be sent with the property name and either 'ASC' or 'DESC'</p>\n",
        "linenr": 75,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-sortParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'sort' parameter to send in a request. ...",
        "static": false,
        "name": "sortParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this\nto undefined if you don't want to send a sort parameter</p>\n",
        "linenr": 57,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-startParam",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The name of the 'start' parameter to send in a request. ...",
        "static": false,
        "name": "startParam",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this\nto undefined if you don't want to send a start parameter</p>\n",
        "linenr": 39,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-timeout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "(optional) The number of milliseconds to wait for a response. ...",
        "static": false,
        "name": "timeout",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>(optional) The number of milliseconds to wait for a response.\nDefaults to 30000 milliseconds (30 seconds).</p>\n",
        "linenr": 92,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-url",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "static": false,
        "name": "url",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The URL from which to request the data object.</p>\n",
        "linenr": 19,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "type": "Object/String/Ext.data.writer.Writer",
        "deprecated": null,
        "href": "Server.html#Ext-data-proxy-Server-cfg-writer",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "The Ext.data.writer.Writer to use to encode any request sent to the server. ...",
        "static": false,
        "name": "writer",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>The <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> to use to encode any request sent to the server.\nThis can either be a Writer instance, a config object or just a valid Writer type name (e.g. 'json', 'xml').</p>\n",
        "linenr": 28,
        "html_filename": "Server.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Creates the Proxy ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Creates the Proxy</p>\n",
        "linenr": 86,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Server-method-fireEvent\" rel=\"Ext.data.proxy.Server-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The Request object</p>\n",
            "name": "request"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the request was successful</p>\n",
            "name": "success"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-afterRequest",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Optional callback function which can be used to clean up after a request has been completed. ...",
        "static": false,
        "name": "afterRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n",
        "linenr": 451,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Object containing the Model instances to act upon, keyed by action name</p>\n",
            "name": "operations"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional listeners object passed straight through to the Batch - see <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a></p>\n",
            "name": "listeners"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-batch",
        "return": {
          "type": "Ext.data.Batch",
          "doc": "<p>The newly created <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a> object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Performs a batch of Operations, in the order specified by batchOrder. ...",
        "static": false,
        "name": "batch",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs a batch of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operations</a>, in the order specified by <a href=\"#/api/Ext.data.proxy.Server-cfg-batchOrder\" rel=\"Ext.data.proxy.Server-cfg-batchOrder\" class=\"docClass\">batchOrder</a>. Used internally by\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> method. Example usage:</p>\n\n<pre><code>myProxy.batch({\n    create : [myModel1, myModel2],\n    update : [myModel3],\n    destroy: [myModel4, myModel5]\n});\n</code></pre>\n\n\n<p>Where the myModel* above are <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances - in this case 1 and 2 are new instances and have not been\nsaved before, 3 has been saved previously but needs to be updated, and 4 and 5 have already been saved but should now be destroyed.</p>\n",
        "linenr": 242,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object to execute</p>\n",
            "name": "operation"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-buildRequest",
        "return": {
          "type": "Ext.data.Request",
          "doc": "<p>The request object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Creates and returns an Ext.data.Request object based on the options passed by the Store\nthat this Proxy is attached to. ...",
        "static": false,
        "name": "buildRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n",
        "linenr": 173,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The request object</p>\n",
            "name": "request"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-buildUrl",
        "return": {
          "type": "String",
          "doc": "<p>The url</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Generates a url based on a given Ext.data.Request object. ...",
        "static": false,
        "name": "buildUrl",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Generates a url based on a given <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object. By default, ServerProxy's buildUrl will\nadd the cache-buster param to the end of the url. Subclasses may need to perform additional modifications\nto the url.</p>\n",
        "linenr": 400,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-create",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Performs the given create operation. ...",
        "static": false,
        "name": "create",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given create operation.</p>\n",
        "linenr": 206,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Performs the given destroy operation. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given destroy operation.</p>\n",
        "linenr": 233,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function to call when the Operation has completed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope in which to execute the callback</p>\n",
            "name": "scope"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-doRequest",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "In ServerProxy subclasses, the create, read, update and destroy methods all pass\nthrough to doRequest. ...",
        "static": false,
        "name": "doRequest",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>In ServerProxy subclasses, the <a href=\"#/api/Ext.data.proxy.Server-method-create\" rel=\"Ext.data.proxy.Server-method-create\" class=\"docClass\">create</a>, <a href=\"#/api/Ext.data.proxy.Server-method-read\" rel=\"Ext.data.proxy.Server-method-read\" class=\"docClass\">read</a>, <a href=\"#/api/Ext.data.proxy.Server-method-update\" rel=\"Ext.data.proxy.Server-method-update\" class=\"docClass\">update</a> and <a href=\"#/api/Ext.data.proxy.Server-method-destroy\" rel=\"Ext.data.proxy.Server-method-destroy\" class=\"docClass\">destroy</a> methods all pass\nthrough to doRequest. Each ServerProxy subclass must implement the doRequest method - see <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a>\nand <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> for examples. This method carries the same signature as each of the methods that delegate to it.</p>\n",
        "linenr": 437,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
            "name": "sorters"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-encodeFilters",
        "return": {
          "type": "String",
          "doc": "<p>The encoded filters</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Encodes the array of Ext.util.Filter objects into a string to be sent in the request url. ...",
        "static": false,
        "name": "encodeFilters",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the filter data</p>\n",
        "linenr": 320,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorter</a> objects</p>\n",
            "name": "sorters"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-encodeSorters",
        "return": {
          "type": "String",
          "doc": "<p>The encoded sorters</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Encodes the array of Ext.util.Sorter objects into a string to be sent in the request url. ...",
        "static": false,
        "name": "encodeSorters",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the sorter data</p>\n",
        "linenr": 299,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.proxy.Server-method-enableBubble\" rel=\"Ext.data.proxy.Server-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getModel",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The model</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Returns the model attached to this Proxy ...",
        "static": false,
        "name": "getModel",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the model attached to this Proxy</p>\n",
        "linenr": 124,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getReader",
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The Reader instance</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Returns the reader currently attached to this proxy instance ...",
        "static": false,
        "name": "getReader",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the reader currently attached to this proxy instance</p>\n",
        "linenr": 163,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getWriter",
        "return": {
          "type": "Ext.data.writer.Writer",
          "doc": "<p>The Writer instance</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Returns the writer currently attached to this proxy instance ...",
        "static": false,
        "name": "getWriter",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Returns the writer currently attached to this proxy instance</p>\n",
        "linenr": 198,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-addManagedListener\" rel=\"Ext.data.proxy.Server-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-removeManagedListener\" rel=\"Ext.data.proxy.Server-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Server-method-mon\" rel=\"Ext.data.proxy.Server-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Server-method-fireEvent\" rel=\"Ext.data.proxy.Server-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "success"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "request"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "response"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "scope"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-method-processResponse",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "processResponse",
        "owner": "Ext.data.proxy.Server",
        "doc": "\n",
        "linenr": 209,
        "html_filename": "Server.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-read",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Performs the given read operation. ...",
        "static": false,
        "name": "read",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given read operation.</p>\n",
        "linenr": 215,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Server-method-mon\" rel=\"Ext.data.proxy.Server-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.proxy.Server-method-suspendEvents\" rel=\"Ext.data.proxy.Server-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Ext.data.Model",
            "optional": false,
            "doc": "<p>The new model. Can be either the model name string,\nor a reference to the model's constructor</p>\n",
            "name": "model"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Sets the new model on the associated Store, if one is present</p>\n",
            "name": "setOnStore"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setModel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Sets the model associated with this proxy. ...",
        "static": false,
        "name": "setModel",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n",
        "linenr": 104,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Object|Ext.data.reader.Reader",
            "optional": false,
            "doc": "<p>The new Reader, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> instance</p>\n",
            "name": "reader"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setReader",
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The attached Reader object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Sets the Proxy's Reader by string, config object or Reader instance ...",
        "static": false,
        "name": "setReader",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n",
        "linenr": 132,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Object|Ext.data.writer.Writer",
            "optional": false,
            "doc": "<p>The new Writer, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> instance</p>\n",
            "name": "writer"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setWriter",
        "return": {
          "type": "Ext.data.writer.Writer",
          "doc": "<p>The attached Writer object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Sets the Proxy's Writer by string, config object or Writer instance ...",
        "static": false,
        "name": "setWriter",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n",
        "linenr": 171,
        "html_filename": "Proxy2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.proxy.Server-method-resumeEvents\" rel=\"Ext.data.proxy.Server-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Server-method-resumeEvents\" rel=\"Ext.data.proxy.Server-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Server-method-addListener\" rel=\"Ext.data.proxy.Server-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Server-method-removeListener\" rel=\"Ext.data.proxy.Server-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The Operation to perform</p>\n",
            "name": "operation"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "name": "scope"
          }
        ],
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-update",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "shortDoc": "Performs the given update operation. ...",
        "static": false,
        "name": "update",
        "owner": "Ext.data.proxy.Proxy",
        "doc": "<p>Performs the given update operation.</p>\n",
        "linenr": 224,
        "html_filename": "Proxy2.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response from the AJAX request</p>\n",
            "name": "response"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The operation that triggered request</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Server.html#Ext-data-proxy-Server-event-exception",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "shortDoc": "Fires when the server returns an exception ...",
        "static": false,
        "name": "exception",
        "owner": "Ext.data.proxy.Server",
        "doc": "<p>Fires when the server returns an exception</p>\n",
        "linenr": 133,
        "html_filename": "Server.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Ed Spencer",
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.ServerProxy"
  ],
  "static": false,
  "name": "Ext.data.proxy.Server",
  "doc": "<p>ServerProxy is a superclass of <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">JsonPProxy</a> and <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">AjaxProxy</a>,\nand would not usually be used directly.</p>\n\n\n\n\n<p>ServerProxy should ideally be named HttpProxy as it is a superclass for all HTTP proxies - for <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4.x it has been \ncalled ServerProxy to enable any 3.x applications that reference the HttpProxy to continue to work (HttpProxy is now an \nalias of AjaxProxy).</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Server.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.data.proxy.Proxy"
});