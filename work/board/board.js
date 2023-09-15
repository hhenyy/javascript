	function check(){
		var writer=document.getElementById("writer");
		var passwd=document.getElementById("passwd");
		var subject=document.getElementById("subject");
		var content=document.getElementById("content");
		
		if(writer.value==""){
			alert("작성자명을 입력하세요.");
			writer.focus();
			return false;
		}
		if(passwd.value==""){
			alert("비밀번호를 입력하세요.");
			passwd.focus();
			return false;
			}
		if(passwd.value.length<2||passwd.value.length>8){ //2자보다 작거나 8자보다 크면 
			alert("비밀번호는 2~8자 이내로 입력 하세요.");  
			passwd.value=""; //입력한 비번 삭제
			passwd.focus();
			return false;
		}
		if(subject.value==""){
			alert("제목를 입력하세요.");
			subject.focus();
			return false;
		}
		if(subject.value.length>50){ //50자보다 크면  //자바스크립트 값의길이:length속성
			alert("제목은 50자 이내로 입력 하세요.");
			subject.value=""; //입력한 제목 삭제
			subject.focus();
			return false;
		}
		if(content.value==""){
			alert("내용을 입력하세요.");
			content.focus();
			return false;
		}
		if(content.value.length>200){ //200자보다 크면 
			alert("내용은 200자 이내로 입력 하세요.");
			content.focus();
			return false;
		}
	}