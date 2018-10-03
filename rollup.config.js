import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	input: 'src/index.tsx',
	output: {
		file: './dist/bundle.js',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
		babel({
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
		sass({
			output: './dist/bundle.css'
		}),
		serve({
			open: true,
			contentBase: 'dist'
		}),
		livereload()
	]
}