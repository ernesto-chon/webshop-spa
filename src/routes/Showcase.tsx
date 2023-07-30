import Button from '../components/atoms/Button';
import InputField from '../components/atoms/InputField';

export default function Showcase() {
  return (
    <>
      <div className="space-y-4">
      <div>
        <Button>Button</Button>
      </div>

      <div>
        <InputField label='First name' placeholder="Input" />
      </div>

      </div>
    </>
  );
}
