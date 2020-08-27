button with action and element

```
Button(
	action: {
		self.showProfile.toggle()
	}
) {
	Image("Avatar")
		.renderingMode(.original)
		.resizable()
		.frame(width: 36, height: 36)
		.clipShape(Circle())
}
```
