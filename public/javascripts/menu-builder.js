var MenuBuilder = {
	options: {
		path: '/menu'
	},
	init: function(obj){
		var that = this;
		this.data = obj.data;

		$('.update-menu-items').click(function(e){
			e.preventDefault();
			that.save();
		});
		$('.add-menu-item').click(function(e){
			e.preventDefault();
			that.save(true);
		});
		$('.delete-menu-item').click(function(e){
			e.preventDefault();
			that.delete(e);
		});
	},
	save: function(isNew){
		var menuData = [];
		var valid = true;
		$('.menu-item').each(function(){
			var $menuItemName = $(this).find('.menu-item-name');
			var name = $menuItemName.val();
			var content = $(this).find('.menu-item-content').val();
			if($.trim(name) == ""){
				name = $menuItemName.attr('data-menu-item-name');
			}
			var item = {name:name, content:content};
			menuData.push(item);
		});

		if(isNew){
			var $menuItem = $('.menu-new-item');
			var $menuItemName = $menuItem.find('.menu-new-item-name');
			var name = $menuItemName.val();
			var content = $menuItem.find('.menu-new-item-content').val();
			if($.trim(name) == ""){
				valid = false;
				alert("Please enter a valid name.");
				return;
			}
			var item = {name:name, content:content};
			menuData.push(item);
		}

		if(valid){
			this.data = menuData;
			this.submit();
		}
	},
	delete: function(e){
		var $deleteButton = $(e.currentTarget);
		var index = parseInt($deleteButton.attr('data-item-index'));
		if(confirm("Are you sure you want to delete this menu item?")){
			this.data.splice(index, 1);
			this.submit();
		}
	},
	submit: function(){
		var form = $('<form></form>');
		form.attr("method", "post");
		form.attr("action", this.options.path);
		form.append("<textarea style='visibility:hidden;' name='menu'>" + JSON.stringify(this.data) + "</textarea>");
		$(document.body).append(form);
		form.submit();
	}
};