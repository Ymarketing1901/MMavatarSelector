    const track = document.getElementById('track');
    const totalItems = track.children.length;
    const itemWidth = 310; // avatar width + margin
    let currentIndex = 0;

    function moveCarousel(direction) {
      currentIndex = (currentIndex + direction + totalItems) % totalItems;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Touch swipe support
    let startX = 0;
    document.getElementById('carousel').addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    document.getElementById('carousel').addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (diff > 50) moveCarousel(-1);
      else if (diff < -50) moveCarousel(1);
    });
