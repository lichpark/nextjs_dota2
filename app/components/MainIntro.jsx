const MainIntro = () => {
  return (
    <div style={{ position: "relative" }}>
      <video autoPlay muted loop playsInline>
        <source
          type="video/webm"
          src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        />
        <source
          type="video/mp4"
          src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
        />
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          color: "white",
        }}
      >
        <div style={{ fontSize: "40px" }}>
          "도타다 LOL보다 먼저 였던거 아시죠?"
        </div>
        <div>-카오스로 워3를 입문한 플레이어</div>
      </div>
    </div>
  );
};

export default MainIntro;
