
    const sliderWrapper = document.getElementById("sliderWrapper");
    const sliderDots = document.getElementById("sliderDots");
    const slides = sliderWrapper.children;
    let currentIndex = 0;

    // Create dots
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      sliderDots.appendChild(dot);
    }

    // Update slider position and dots
    const updateSlider = () => {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      [...sliderDots.children].forEach((dot, idx) =>
        dot.classList.toggle("active", idx === currentIndex)
      );
    };

    // Auto slide every 4 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, 4000);




	atOptions = {
		'key' : '4d0105a21a87970b2c76d02885002cd0',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};



	atOptions = {
		'key' : '4d0105a21a87970b2c76d02885002cd0',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};



  function closePopup() {
    document.getElementById("tributePopup").style.display = "none";
  }

  // 🔁 Auto close after 6 seconds (optional)
  setTimeout(() => {
    closePopup();
  }, 10000);



    const modal = document.getElementById("popupModal");
    const video = document.getElementById("videoPlayer");

    function openModal() {
      modal.style.display = "block";
    }

    function closeModal() {
      modal.style.display = "none";
      video.style.display = "none";
      video.src = "";
    }

    function playVideo() {
      const url = document.getElementById("videoUrl").value.trim();
      if (url === "") {
        alert("Please paste a video URL");
        return;
      }

      video.src = url;
      video.style.display = "block";

      video.play().catch(err => {
        alert("Video playback failed. Check the URL or server.");
        console.error(err);
      });

      // Add fullscreen orientation lock listeners
      video.addEventListener('fullscreenchange', lockOrientation);
      video.addEventListener('webkitfullscreenchange', lockOrientation);
      video.addEventListener('mozfullscreenchange', lockOrientation);
      video.addEventListener('msfullscreenchange', lockOrientation);
    }

    async function lockOrientation() {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (isFullscreen && screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('landscape');
          console.log("Orientation locked to landscape");
        } catch (err) {
          console.warn("Orientation lock failed:", err);
        }
      }
    }

    // Close modal on outside click
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
