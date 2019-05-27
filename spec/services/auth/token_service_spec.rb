require "rails_helper"

RSpec.describe Auth::TokenService do
  describe ".create_jwt_token" do
    context "with positive number" do
      let(:data) { Faker::Number.positive.round }
      subject { described_class.new(data) }

      it { expect(subject.create_jwt_token).to be_a String }
    end

    context "with string" do
      let(:data) { Faker::Verb.base }
      subject { described_class.new(data) }
      
      it { expect(subject.create_jwt_token).to be_a String }
    end
  end

  describe ".open_jwt_token" do
    context "when not valid" do
      let(:data) { Faker::Verb.base }
      subject { described_class.new(data) }
      
      it { expect(subject.open_jwt_token).to eq nil }
    end
  end

  describe "flow" do
    context "when create and open a token" do
      let(:data) { Faker::Number.positive.round.to_s }
      let(:jwt_token) { described_class.new(data).create_jwt_token }

      subject { described_class.new(jwt_token) }

      it { expect(subject.open_jwt_token.dig("data")).to eq data }
    end
  end
end
