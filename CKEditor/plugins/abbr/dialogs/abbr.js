/**
 * The abbr dialog definition.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */

// Our dialog definition.
CKEDITOR.dialog.add( 'abbrDialog', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Insert IFRAME',
		minWidth: 400,
		minHeight: 200,

		// Dialog window contents definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab contents.
				elements: [
					{
						// Text input field for the abbreviation text.
						type: 'text',
						id: 'v_url',
						label: 'Video URL',

						// Validation checking whether the field is not empty.
						validate: CKEDITOR.dialog.validate.notEmpty( "Video URL field cannot be empty" )
					},
					{
						// Text input field for the abbreviation title (explanation).
						type: 'text',
						id: 'v_width',
						label: 'Width',
						//validate: CKEDITOR.dialog.validate.notEmpty( "Width field cannot be empty" )
					},
					{
						// Text input field for the abbreviation title (explanation).
						type: 'text',
						id: 'v_height',
						label: 'Height',
						//validate: CKEDITOR.dialog.validate.notEmpty( "Height field cannot be empty" )
					},
					
				]
			},

			// Definition of the Advanced Settings dialog tab (page).
			{
				id: 'tab-adv',
				label: 'Advanced Settings',
				elements: [
					{
						// Another text field for the abbr element id.
						type: 'text',
						id: 'id',
						label: 'Id'
					}
				]
			}
		],

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
			var dialog = this;
				  
						iframe  = editor.document.createElement('iframe');
					// Populate the data object with data entered in the dialog window.
					// http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dialog.html#commitContent

             var url_video = dialog.getValueOf('tab-basic', 'v_url' );
			 url1=url_video.replace("watch?v=", "embed/");
			// Set element attribute and text, by getting the defined field values.
			iframe.setAttribute( 'src', url1);
			
			var width_video = dialog.getValueOf( 'tab-basic', 'v_width' );
			if(width_video)
			iframe.setAttribute('width', dialog.getValueOf( 'tab-basic', 'v_width' ) );
			else
			iframe.setAttribute('width',320 );
			iframe.setAttribute('height', dialog.getValueOf( 'tab-basic', 'v_height' ) );
			iframe.setAttribute( 'frameborder', '0');


			// Finally, inserts the element at the editor caret position.
			editor.insertElement( iframe );
		}
	};
});