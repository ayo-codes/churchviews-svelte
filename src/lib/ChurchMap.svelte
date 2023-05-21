<script>
	import "leaflet/dist/leaflet.css";
	import { LeafletMap } from "../services/leaflet-map";
	import { onMount } from "svelte";
	import { churchviewService } from "../services/churchview-service";
  import { latestChurch } from "../stores";

	const mapConfig = {
		location: { lat: 53.33440043, lng: -6.2748843 },
		zoom: 8,
		minZoom: 1
	};

  let map; 

	onMount(async () => {
		map = new LeafletMap("church-map", mapConfig);
		map.showZoomControl();
    map.addLayerGroup("Churches");
		map.showLayerControl();  
		const churches = await churchviewService.getChurches();
		churches.forEach((church) => {
			addChurchMarker(map, church);
		});
	});

	function addChurchMarker(map, church) {
		const churchStr = `${church.name}`;
		map.addMarker({ lat: church.latitude, lng: church.longitude }, churchStr, "Churches");
    map.moveTo(8, {lat: church.latitude, lng: church.longitude });
	}

  latestChurch.subscribe(async (church) => {
        if (church && map) {
            addChurchMarker(map, church);
        }
    });
</script>

<div class="box" id="church-map" style="height:75vh" />
