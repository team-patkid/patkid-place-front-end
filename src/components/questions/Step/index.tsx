type StepProps = {
  total: number;
  step: number;
  className?: string;
};

const Step = ({ total, step, className }: StepProps) => {
  return (
    <p className={className}>
      {step}/{total}
    </p>
  );
};

export default Step;
