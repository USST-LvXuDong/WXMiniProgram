Page({
	data: {
		latitude: 31.293437,
		longitude: 121.555454
	},
	getLocation: function (e) {
		let that = this
		wx.getLocation({
			type: 'gcj02',
			success:(res)=> {
				let latitude = res.latitude;
				let longitude = res.longitude;
				let marker = [{
					latitude: res.latitude,
					longitude: res.longitude,
					name: 'q'}];
				that.setData({
						longitude: longitude,
						latitude: latitude,
						marker: marker
				})
			}
		})
	}
})
