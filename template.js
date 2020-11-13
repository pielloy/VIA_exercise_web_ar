let test;


class View  {
	/*
	**		Init three.js
	*/
	constructor (map_size) {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();

		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.camera.position.z = 10;
		this.camera.position.x = 14;
		this.camera.rotation.x = 45;
		this.camera.position.y = -4;
		document.body.appendChild(this.renderer.domElement);
		this.generateMapOfCube(map_size);
	}

	/*
	**		Init map
	*/
	generateMapOfCube(map_size) {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		this.map = [];
		for (let x = 0; x != map_size; x++) {
			this.map[x] = new THREE.Mesh(geometry, material);
			this.map[x].position.x = x * 1;
			this.map[x].position.y = 3;
			this.scene.add(this.map[x]);
		}
		this.animate = () => this.animationLoop();
		this.animate();
		this.delta = 0;
	}

	/*
	**		Function to listen key input
	*/



	/*
	**		Function called each frame
	*/
	animationLoop() {
		requestAnimationFrame( this.animate );

		for (let i = 0; i != this.map.length; i++) {
			this.map[i].position.z = Math.sin(i + this.delta);
		}
		this.delta += 0.01;

		this.renderer.render( this.scene, this.camera);
	}


};



test = new View(30, 30);

test.animationLoop();