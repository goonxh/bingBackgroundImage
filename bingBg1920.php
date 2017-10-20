<?php
	$str=file_get_contents('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
	$array = json_decode($str);
	$imgurl = 'http://cn.bing.com'.$array->{"images"}[0]->{"url"};
	if($imgurl){
		header('Content-Type: image/JPEG');
		@ob_end_clean();
		@readfile($imgurl);
		@flush(); @ob_flush();
		exit();
	}else{
		exit('error');
	}
?>