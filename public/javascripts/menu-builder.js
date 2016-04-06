var MenuBuilder = {
	options: {
		path: '/menu'
	},
	init: function(obj){
		var that = this;
		this.data = obj.data;

		$('.update-menu-items').click(function(){
			that.save();
		});
		$('.add-menu-item').click(function(){
			that.save();
		});
	},
	save: function(isNew){
		var menuData = [];
		var valid = true;
		$('.menu-item').each(function(){
			var name = $(this).find('.menu-item-name').val();
			var content = $(this).find('.menu-item-content').val();
			if($.trim(name) == ""){
				valid = false;
				alert("Please enter a valid name");
				return;
			}
			var item = {name:name, content:content};
			menuData.push(item);
		});

		if(valid){
			var form = $('<form></form>');

		    form.attr("method", "post");
		    form.attr("action", this.options.path);

		    form.append("<textarea style='visibility:hidden;' name='menu'>" + JSON.stringify(menuData) + "</textarea>");

		    // The form needs to be a part of the document in
		    // order for us to be able to submit it.
		    $(document.body).append(form);
		    form.submit();
		}
	}
};