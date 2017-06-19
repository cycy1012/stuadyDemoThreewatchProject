require(['config'],function(){
	require(['jquery','global','form'],function(){
		$(function(){
			$('.liOne').click(function(){
				$('.message_list').slideToggle(500);
			})

			$('.listPro').click(function(){
				window.location.href='index.html'
				console.log(111)
			})

			$('.submit_data').click(sendDB)

			function sendDB(){
				var data = {};
				data.name = $('#name').val();
				data.price = $('#price').val();
				data.old_price = $('#old_price').val();
				data.pinpai = $('#pinpai').val();
				data.fare = $('#fare').val();
				data.sale_number = $('#sale_number').val();
				data.people = $('#people').val();
				data.xinghao = $('#xinghao').val();
				data.jixin = $('#jixin').val();
				data.biaokou = $('#biaokou').val();
				data.biaojing = $('#biaojing').val();
				data.biaodi = $('#biaodi').val();
				data.big = $('#big').val();
				data.xingzhuang = $('#xingzhuang').val();
				data.kedu = $('#kedu').val();
				data.color = $('#color').val();
				data.caizhi = $('#caizhi').val();
				data.fangshui = $('#fangshui').val();
				data.zhengshu = $('#zhengshu').val();
				data.qujian = $('#qujian').val();
				data.changjing = $('#changjing').val();
				data.gongneng = $('#gongneng').val();
				data.new = $('#zhuangqu').val();
				data.biaoke = $('#biaoke').val();

				data = JSON.stringify(data);

				if(confirm('确定要上传数据？')){
					$('form').ajaxSubmit({
						type: 'post',
						data: {'data':data},
						dataType: 'json',
						url: erp.baseUrl + 'addData',
						success:function(data){
	                        console.log(data);
	                    },
					});	
				}
				
			}
		})
	})
})