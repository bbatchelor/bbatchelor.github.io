$(document).ready(function() {

//	MAKE HEADER FIXED ON TOP AFTER SCROLL
	var stickyOffset = 34;

	$(window).scroll(function(){
		var sticky = $('.nav-wrap'),
		scroll = $(window).scrollTop();

		if (scroll >= stickyOffset) 
		{
			sticky.addClass('sticky');
			sticky.removeClass('unstick');
		}
		else {
			sticky.removeClass('sticky');
			sticky.addClass('unstick');
		}
	});

//	MAKE TOP HEADER BAR ICON TOGGLE ARROWS IN MOBILE
	$('.top-bar .close').click(function() {
		$('.top-bar').toggleClass('open');
	});
//	OPEN USER DROPDOWN ON CLICK
	$('.site-user').click(function(e) {
		$('.site-user-options').toggle();
		e.stopPropagation();
	});

//	OPEN POPUP
	$('.popup-link').click(function(e) {
		var class_name = $(this).attr('class');
		$('.popup').each(function(){
			if(class_name.indexOf($(this).attr('id')) != -1){
				$(this).find('input').val('');
				$(this).addClass('display-popup');
				$('html').addClass('hide-body');
			}
		});
		e.stopPropagation();
	});

	$('.popup-content').click(function(e) {
		e.stopPropagation();
	});

//	EDIT EMPLOYEE
	$('.edit-employee').click(function() {
		var edit_row_item = $(this).parent('.superadmin-user-delete').parent('li').index();
		$('#edit_employee_name').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-name').text());
		$('#edit_employee_id').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-email').text());

		$('#edit_employee_btn').click(function(){
			$('.popup').hide();
			$('.popup').removeClass('display-popup');
			$('html').removeClass('hide-body');
			var edit_employee_name = $(this).siblings('#edit_employee_name').val();
			var edit_employee_id = $(this).siblings('#edit_employee_id').val();
			$('.user-table li').eq(edit_row_item).find('.superadmin-user-name').text(edit_employee_name);
			$('.user-table li').eq(edit_row_item).find('.superadmin-user-email').text(edit_employee_id);
		});

	});

//	EDIT PARENT FOLDER NAME
	$('.edit-parent-folder').click(function() {
		$('#edit_folder_name').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-name').text());

		$('#edit_folder_btn').click(function(){
			$('.popup').hide();
			$('.popup').removeClass('display-popup');
			$('html').removeClass('hide-body');
			var edit_parent_folder_name = $(this).siblings('#edit_folder_name').val();
			$('.manage-user-table').find('.all-folders-parent').find('.superadmin-user-name').text(edit_parent_folder_name);
		});

	});

//	EDIT FOLDER NAME
	$('.edit-folder').click(function() {
		var edit_folder_row_item = $(this).parent('.superadmin-user-delete').parent('li').index();
		$('#edit_folder_name').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-name').text());

		$('#edit_folder_btn').click(function(){
			$('.popup').hide();
			$('.popup').removeClass('display-popup');
			$('html').removeClass('hide-body');
			var edit_folder_name = $(this).siblings('#edit_folder_name').val();
			$('.all-folders-list li').eq(edit_folder_row_item).find('.superadmin-user-name').text(edit_folder_name);
		});

	});

	function bindClickToLinkEmployee() {	
		$('.popup-link').click(function(e) {
			var cloned_class_name = $(this).attr('class');
			$('.popup').each(function(){
				if(cloned_class_name.indexOf($(this).attr('id')) != -1){
					$(this).addClass('display-popup');
					$('html').addClass('hide-body');
				}
			});
			e.stopPropagation();
		});

		$('.edit-employee.new_user_edit').click(function() {
			var cloned_edit_row_item = $(this).parent('.superadmin-user-delete').parent('li').index();
			$('#edit_employee_name').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-name').text());
			$('#edit_employee_id').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-email').text());

			$('#edit_employee_btn').click(function(){
				$('.popup').hide();
				$('.popup').removeClass('display-popup');
				$('html').removeClass('hide-body');
				var cloned_edit_employee_name = $(this).siblings('#edit_employee_name').val();
				var cloned_edit_employee_id = $(this).siblings('#edit_employee_id').val();
				$('.user-table li').eq(cloned_edit_row_item).find('.superadmin-user-name').text(cloned_edit_employee_name);
				$('.user-table li').eq(cloned_edit_row_item).find('.superadmin-user-email').text(cloned_edit_employee_id);;
			});

		});

		$('.delete_user.new_user_delete').each(function(){
			$(this).click(function() {
				if (confirm("Delete The Employee?") == true) {
					$(this).parent('.superadmin-user-delete').parent('li').remove();
				} else {
//					do nothing
				}
			});
		});

	}
//	ADD NEW EMPLOYEE
	$('#add_new_employee_btn').click(function() {
		var new_employee_name = $(this).siblings('#new_employee_name').val();
		var new_employee_id = $(this).siblings('#new_employee_id').val();
		var cloned_div=null;
		$('.popup').hide();
		$('.popup').removeClass('display-popup');
		$('html').removeClass('hide-body');
		if(!$('.add_new_employee').parent('.user-table-header').next('.user-table').children('li').find('.edit-employee').length){
			cloned_div = '<li><span class="superadmin-user-wrap"><span class="superadmin-user-name"></span><span class="superadmin-user-email"></span></span><span class="superadmin-user-delete"><img alt="Delete User" src="../images/deleteIcon.png" class="delete_user new_user_delete"></span></li>';
		}
		else{
			cloned_div = '<li><span class="superadmin-user-wrap"><span class="superadmin-user-name"></span><span class="superadmin-user-email"></span></span><span class="superadmin-user-delete"><img alt="Edit User" src="../images/editIcon.png" class="edit-employee popup-link edit_employees new_user_edit"><img alt="Delete User" src="../images/deleteIcon.png" class="delete_user new_user_delete"></span></li>';
		}
		$('.user-table').prepend(cloned_div);

		var cloned_first_child = $('.user-table li:first-child');
		cloned_first_child.find('.superadmin-user-name').text(new_employee_name);
		cloned_first_child.find('.superadmin-user-email').text(new_employee_id);
		cloned_first_child.each(function () {
			bindClickToLinkEmployee();
		});
	});

	function bindClickToLinkFolder() {	
		$('.popup-link').click(function(e) {
			var cloned_class_name = $(this).attr('class');
			$('.popup').each(function(){
				if(cloned_class_name.indexOf($(this).attr('id')) != -1){
					$(this).addClass('display-popup');
					$('html').addClass('hide-body');
				}
			});
			e.stopPropagation();
		});

//		EDIT FOLDER NAME
		$('.edit-folder.new_folder_edit').click(function() {
			var edit_folder_row_item = $(this).parent('.superadmin-user-delete').parent('li').index();
			$('#edit_folder_name').val($(this).parent('.superadmin-user-delete').siblings('.superadmin-user-wrap').find('.superadmin-user-name').text());

			$('#edit_folder_btn').click(function(){
				$('.popup').hide();
				$('.popup').removeClass('display-popup');
				$('html').removeClass('hide-body');
				var edit_folder_name = $(this).siblings('#edit_folder_name').val();
				$('.all-folders-list li').eq(edit_folder_row_item).find('.superadmin-user-name').text(edit_folder_name);
			});

		});

//		DELETE FOLDER LIST ITEM
		$('.delete_folder.new_folder_delete').each(function(){
			$(this).click(function() {
				if (confirm("Delete The Folder?") == true) {
					$(this).parent('.superadmin-user-delete').parent('li').remove();
				} else {
//					do nothing
				}
			});
		});

	}
//	ADD NEW FOLDER
	$('#add_new_folder_btn').click(function() {
		var new_folder_name = $(this).siblings('#new_folder_name').val();
		var cloned_folder_div = null,cloned_new_folder_first_child = null;
		$('.popup').hide();
		$('.popup').removeClass('display-popup');
		$('html').removeClass('hide-body');
		if($('.manage-user-table').find('li').length)
		{
			if($('.manage-employee-folder').is(":visible")){
				cloned_folder_div = '<li><span class="superadmin-user-wrap"><span class="superadmin-user-name"></span></span><span class="superadmin-user-delete"><img alt="Delete Folder" src="../images/deleteIcon.png" class="delete_folder new_folder_delete"></span></li>';
				$('.manage-employee-folder').prepend(cloned_folder_div);
				cloned_new_folder_first_child= $('.manage-employee-folder li').eq(0);
				cloned_new_folder_first_child.find('.superadmin-user-name').text(new_folder_name);

				cloned_new_folder_first_child.each(function () {
					bindClickToLinkFolder();
				});
			}
			else{
				cloned_folder_div = '<li><span class="superadmin-user-wrap"><span class="superadmin-user-name"></span></span><span class="superadmin-user-delete"><img alt="Edit Folder" src="../images/editIcon.png" class="edit-employee edit-folder popup-link edit_folder new_folder_edit"><img alt="Delete Folder" src="../images/deleteIcon.png" class="delete_folder new_folder_delete"></span></li>';
				$('.all-folders-list').prepend(cloned_folder_div);
				cloned_new_folder_first_child= $('.all-folders-list li').eq(0);
				cloned_new_folder_first_child.find('.superadmin-user-name').text(new_folder_name);

				cloned_new_folder_first_child.each(function () {
					bindClickToLinkFolder();
				});
			}
		}
		else{
			var cloned_parent_folder_div = '<li><span class="all-folders-parent"><span class="superadmin-user-wrap"><span class="superadmin-user-name"></span><span class="superadmin-user-email"><span class="folder-number">212</span> Folders, <span class="file-number">22</span> Files</span></span><span class="superadmin-user-delete"><img alt="Edit Folder" src="../images/editIcon.png" class="edit-employee edit-folder popup-link edit_folder new_folder_edit"><img alt="Delete Folder" src="../images/deleteIcon.png" class="delete_folder new_folder_delete"></span></span><ul class="all-folders-list"></ul></li>';
			$('.manage-user-table').prepend(cloned_parent_folder_div);
			var cloned_new_parent_folder_first_child= $('.manage-user-table li').eq(0);
			cloned_new_parent_folder_first_child.find('.superadmin-user-name').text(new_folder_name);

			cloned_new_parent_folder_first_child.each(function () {
				bindClickToLinkFolder();
			});
		}
	});

//	DELETE USER
	$('.delete_user').each(function(){
		$(this).click(function() {
			if (confirm("Delete The Employee?") == true) {
				$(this).parent('.superadmin-user-delete').parent('li').remove();
			} else {
//				do nothing
			}
		});
	});

//	DELETE PARENT FOLDER
	$('.delete_parent_folder').each(function(){
		$(this).click(function() {
			if (confirm("Delete All The Folders?") == true) {
				$(this).parent('.superadmin-user-delete').parent('.all-folders-parent').parent('li').remove();
			} else {
//				do nothing
			}
		});
	});

//	DELETE FOLDER LIST ITEM
	$('.delete_folder').each(function(){
		$(this).click(function() {
			if (confirm("Delete The Folder?") == true) {
				$(this).parent('.superadmin-user-delete').parent('li').remove();
			} else {
//				do nothing
			}
		});
	});

//	CLOSE USER DROPDOWN WHEN CLICKED OUTSIDE
	$(document).click(function(){
		$(".site-user-options").hide();
		$('.popup').hide();
		$('.popup').removeClass('display-popup');
		$('html').removeClass('hide-body');
	});

//	OPENING AND CLOSING OF TABS IN MANAGE PAGE
	$('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');
		$('.tabs ' + currentAttrValue).addClass('active').siblings().removeClass('active');
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

//	OPENING SUBPAGE OF MANAGE FILES/FOLDERS
	$('.all-folders-list li').find('.superadmin-user-wrap').click(function() {
		var detail_row = $(this).index();
		var row_user_name = $(this).find('.superadmin-user-name').text();
		$('.manage-user-table').hide();
		$('.manage-employee-folder').show();
		$('#manage_files').find('.admin-acess-row').html('<span class="back-to-all">All</span> > '+row_user_name);

		$('.back-to-all').click(function() {
			$('.manage-user-table').show();
			$('.manage-employee-folder').hide();
			$('#manage_files').find('.admin-acess-row').html('Files & Folders');
		});
	});

});