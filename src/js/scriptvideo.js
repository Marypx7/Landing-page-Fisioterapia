const openBtn = document.getElementById('open-video');
        const modal = document.getElementById('video-modal');
        const closeBtn = document.getElementById('close-video');
        const video = document.getElementById('portfolio-video');

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            if (video.tagName === 'VIDEO') video.pause();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                if (video.tagName === 'VIDEO') video.pause();
            }
        });
