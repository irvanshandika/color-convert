import { Hono } from 'hono';
import { keyword } from 'color-convert';
import { KEYWORD } from 'color-convert/conversions';

const app = new Hono();

app.get('/', (ctx) => {
	return ctx.text('Hello World!');
});

app.get('/:colorformat/:colorname', (ctx) => {
	const colorname: KEYWORD = ctx.req.param('colorname') as KEYWORD;
	const colorformat: string = ctx.req.param('colorformat');

	if (colorformat == 'hex') {
		return ctx.text('#' + keyword.hex(colorname));
	}
	if (colorformat == 'rgb') {
		return ctx.text('RGB: ' + keyword.rgb(colorname).toString());
	}
	return ctx.text('Colorname and colorformat correct');
});

export default app