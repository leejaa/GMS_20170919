<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<body>
<h1 class="text-center">게시글 쓰기</h1> <hr />
<div style="margin-left: 500px;">
<div class="wrapper" style="width: 500px;border-style:groove;border-color: blue;">
  <form action="./board_list.jsp">
  <div class="form-group" style="margin-left: 100px;">
      <label for="comment">글제목</label>
      <textarea class="form-control" rows="1" cols="20" id="comment"></textarea>
    </div>
  
    <div class="form-group" style="margin-left: 100px;">
      <label for="comment">글내용</label>
      <textarea class="form-control" rows="10" cols="20" id="comment"></textarea>
    </div>
    
    <div class="form-group" align="right" style="margin-left: 100px;">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-danger">전송</button>
      </div>
    </div>
  </form>
</div>
</div>
</body>
<script>
window.onload=mainLoad();
</script>
</html>