class ChangePetsToPetPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :petpoints, :string, array: true, default: []
  end
end
