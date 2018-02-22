var $anchorRipple = $('#nav > li >a');
$anchorRipple.on('click',function(){
	var $self = $(this);
	$self.next().toggle();
});