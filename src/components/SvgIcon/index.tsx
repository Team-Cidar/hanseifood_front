import * as Icons from "../../../public/svgs";

export type SvgIconProps = {
  name: keyof typeof Icons;
  width: string | number | undefined;
  height: string | number | undefined;
  fill: string;
};
function SvgIcon({ name, width, height, fill }: SvgIconProps) {
  const Svg = Icons[name];
  return (
    <Svg width={width} height={height} fill={fill}/>
  );
}

export default SvgIcon;