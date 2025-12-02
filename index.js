const gifs = [
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZwZGduaXR6aHhkZ3U5eHlqcjRmYjJjdGY3NmpuZjRlb2o1ZW5zZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZIG63RdogLgqI/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQ1cWc4eTVnNGcyaWZpeXQyMHh3eDR0MDJpa3BrZjZ2Ymg3MjIwayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/y6ofPeeTySLTNgcFB3/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3A2bHhpNHc4b2dyc2ZtZ2pjcHgyZzNsd3VxNWZlYWV2ZzN4Zjd0ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qwGtSvKLr3Ae0aydDy/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWgzMmR1bWVkZHFhdjJrbWdwemFqZ2Jkdm1ieWZkb3RmaDNyc2F0cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9JrvLb0fnrn7k1ZjhX/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azNjYWcwOW5iNnU4YWdtdXZycGZ1bWw2ejBtY2FsaWV0aHJnMnFqMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/b4K0MfAZNLiQDqgYJN/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXR2YTcxYzJocHV4NWd2aXBjemVkZGNxenlldXIyNm1qN2VndmwxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WFauSXDxTrEUo/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZnZDlnc2YycG5kMHc2czExczk5dzZsN2xma2dzeGxrNzRybzZoMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xxhKYiOOIs9mGZz1Hy/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZnZDlnc2YycG5kMHc2czExczk5dzZsN2xma2dzeGxrNzRybzZoMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8KFTElqwyGHIV4qLqo/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3p6MnE5d2drc24wM2U0c2x6azIwejVuZDgzeGU5YnV2dmE3Yjg1aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TZ2UZR1HpvXcQ/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjJtemo1a3FlZXI3ZG41MDNib2h1ZTNpMGFidHIweHRwdHdrdXk5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KZkkIRSXM4ePu7UVW7/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRsZ3JpMGs2c2d4bDEyZmlvZ2lrOTk5MDQ5Y3B2ZW8wOHN3dWRqNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l36kU80xPf0ojG0Erg/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGF3enMwem93ZG92bHkya3IydjF4Ym12MDhyN3N2c2U0ajM0Mnh0byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fbFbMdF9KI3QY/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhqdmIyYWMxZm9tNnZtbjUwbHRxMWQyeXM1a3hrNnFocWY0OXI2cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RdJWxAtxbm6TBbCGZx/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhqdmIyYWMxZm9tNnZtbjUwbHRxMWQyeXM1a3hrNnFocWY0OXI2cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/njS7fzNbKflZu/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNnMjI0bGpwNmo3ZnN6ZmthZmt6NjRybm96OHNlaGdidmZmbmR0eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Er5Mkg8kxNKbz2HIgl/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGF0ZXgwaTVmbnoxcTMxbWJ2dno3bm40NGVraWUxbmozOWduaHp5ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QvwMDYpAMUm6Q/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanF4M3F1dnVwa2JwMnZvM3I0amUzZzdmbmIxemQxanBvZGh2d2E3ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RC1nT7GIeUXpHqdTKP/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM281a210anZiN3VoajByeDV2dzk4Mmp6cjBreWttYzVoODlmOThzbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5Tg1PLEnROfPmd8bQf/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhpcHJ0NDVnYmF6MzJkZWZmNTE2M3Vsam9qNWpvOW0wZDJzMnc3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MpME4O2qaFDMI/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhpcHJ0NDVnYmF6MzJkZWZmNTE2M3Vsam9qNWpvOW0wZDJzMnc3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z8JoL4fG9ftJJjPcrb/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI5Z2RyN2owam5vanF1djh6c3JxY3dxNG5uaGhxdzJjYTcyeHN2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cJMlR1SsCSkUjVY3iK/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBrczQ2N3hiM2c0OWZhdmcyOXp0c3pnNTBpb2Y0MHVxcXh1enljOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mM9HnZM5LSO0o/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHlybzM4azZ3b2wxc3EzbzQwbjlqeWZsMTNvdXR2OGptejB2M3lyZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/o3Ml9Hs7CU1M7Auo7T/giphy.gif",
	"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnhpbzE2ZjN4ZGFuOGFsY3EwZGt6bmVpMDRzcTFhM3kxNWZiMmE2YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kw1icDacQKeyY/giphy.gif",
];
const $btns = document.querySelectorAll("button");


for (let i = 0; i < $btns.length; i++) {
	const $btn = $btns[i];

	$button.addEventListener("click", () => {
		const nbrAleatoire = Math.floor(Math.random() * (gifs.length - 1));
		const url = gifs[nbrAleatoire];

		console.log(url);

		$btn.style.background = `center / cover url($(url)) no-repeat`;
	});
}
