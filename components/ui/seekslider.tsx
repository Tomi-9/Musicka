import { Slider } from '@/components/ui/slider'

export function MusicSlider() {
    return (
   <div>
    <Slider defaultValue={[33]} max={100} step={1} />
   </div>
    );
}

/* <Slider
  value={[currentTime]}
  max={duration}
  step={1}
  onValueChange={(value) => {
    audio.currentTime = value[0]
  }}
/> */