// passes focus to the next control
function auto_tab(theSrc,theTarget)
{
	try
	{
		if(theSrc.maxLength&&theSrc.maxLength==theSrc.value.length)
		{
			theTarget.select();
		}
		return true;
	}
	catch(e)
	{
		return false;
	}
}

function changeFCK_Toolbar(instance,toolbar)
{
	var iframe = document.getElementById(instance+'___Frame');
	iframe.onload =
	function()
	{
		var editor = FCKeditorAPI.GetInstance(instance);
		if(editor.LoadToolbar())editor.StartEditor();
	}
	iframe.src=iframe.src.substr(0,iframe.src.lastIndexOf('=')+1)+toolbar;
}