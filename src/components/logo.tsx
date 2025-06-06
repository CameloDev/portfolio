import logoPng from '/public/logotipo.png';

export function Logo(props: React.ComponentProps<'img'>) {
  return (
    <img
      src={logoPng.src}
      alt="Logo"
      style={{ width: 96, height: 72, objectFit: 'contain' }}
      {...props}
    />
  );
}