
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { aO as get, S as SvelteComponentDev, a as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, m as element, O as text, e as add_location, f as insert_dev, g as append_dev, P as set_data_dev, n as noop, h as detach_dev } from './main-048546a6.js';

/* src/lib/router/routes/Storage.svelte generated by Svelte v3.21.0 */
const file = "src/lib/router/routes/Storage.svelte";

function create_fragment(ctx) {
	let pre;
	let t_value = JSON.stringify(/*res*/ ctx[0], null, 2) + "";
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text(t_value);
			add_location(pre, file, 12, 0, 240);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*res*/ 1 && t_value !== (t_value = JSON.stringify(/*res*/ ctx[0], null, 2) + "")) set_data_dev(t, t_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload($page, $session) {
	const res = await get("/users/me/storage");
	return { res };
}

function instance($$self, $$props, $$invalidate) {
	let { res } = $$props;
	const writable_props = ["res"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Storage> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Storage", $$slots, []);

	$$self.$set = $$props => {
		if ("res" in $$props) $$invalidate(0, res = $$props.res);
	};

	$$self.$capture_state = () => ({ get, preload, res });

	$$self.$inject_state = $$props => {
		if ("res" in $$props) $$invalidate(0, res = $$props.res);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [res];
}

class Storage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { res: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Storage",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*res*/ ctx[0] === undefined && !("res" in props)) {
			console.warn("<Storage> was created without expected prop 'res'");
		}
	}

	get res() {
		throw new Error("<Storage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set res(value) {
		throw new Error("<Storage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Storage;
export { preload };
//# sourceMappingURL=Storage-0840f14c.js.map
