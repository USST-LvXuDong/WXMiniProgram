Page({
  data: {
    direction: 0,
		direction_text: "北"
  },
  onReady: function () {
    var that = this
    wx.onCompassChange(function (res) {
      that.setData({
        direction: parseInt(res.direction)
      })
    })
  },
	changeDirection_text: function (e) {
		let Direction_Number = e.direction;
		let Direction_text;
		if (Direction_Number > 45 && Direction_Number < 135) {
			Direction_text = "东";
		}
		else if (Direction_Number > 135 && Direction_Number < 225) {
			Direction_text = "南";
		}
		else if (Direction_Number > 225 && Direction_Number < 315) {
			Direction_text = "西";
		}
		else {
			Direction_text = "北";
		}
		return Direction_text;
	}
})
