require "rails_helper"

RSpec.describe Weather::Converters::FahrenheitService do
  describe ".to_celsius" do
    def fahrenheit_to_celsius(fahrenheit)
      ((fahrenheit.to_f - 32.0) * (5.0 / 9.0)).round
    end

    context "with integer value" do
      let(:fahrenheit) { Faker::Number.number(2) }
      subject { described_class.new(fahrenheit) }

      it { expect(subject.to_celsius).to eq fahrenheit_to_celsius(fahrenheit) }
    end

    context "with negative value" do
      let(:fahrenheit) { Faker::Number.between(-100, -1) }
      subject { described_class.new(fahrenheit) }

      it { expect(subject.to_celsius).to eq fahrenheit_to_celsius(fahrenheit) }
    end

    context "with decimal value" do
      let(:fahrenheit) { Faker::Number.decimal(2) }
      subject { described_class.new(fahrenheit) }

      it { expect(subject.to_celsius).to eq fahrenheit_to_celsius(fahrenheit) }
    end
  end
end
