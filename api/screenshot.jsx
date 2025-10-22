import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #2d4a5a 0%, #3a6070 25%, #468095 50%, #4a9688 75%, #52a88a 100%)',
        }}
      >
        {/* Animated gradient layers simulation */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at 25% 25%, rgba(67, 166, 140, 0.4) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at 75% 35%, rgba(70, 128, 149, 0.5) 0%, transparent 45%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at 20% 70%, rgba(65, 115, 136, 0.6) 0%, transparent 55%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 700,
              margin: 0,
              marginBottom: '20px',
              letterSpacing: '-1px',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
            }}
          >
            Santiago Ávila
          </h1>
          <p
            style={{
              fontSize: '24px',
              fontWeight: 300,
              margin: 0,
              marginBottom: '15px',
              opacity: 0.95,
            }}
          >
            Full Stack Developer
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 300,
              margin: 0,
              opacity: 0.85,
            }}
          >
            Nivel avanzado en inglés (C1)
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 300,
    }
  );
}
