# @shopify/react-native-skia.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

fabric_enabled = ENV['RCT_NEW_ARCH_ENABLED'] == '1'

Pod::Spec.new do |s|
  s.name         = "react-native-skia"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  @shopify/react-native-skia
                   DESC
  s.homepage     = "https://github.com/shopify/react-native-skia"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Your Name" => "yourname@email.com" }
  s.platforms    = { :ios => "12.0" }
  s.source       = { :git => "https://github.com/shopify/react-native-skia/react-native-skia.git", :tag => "#{s.version}" }

  s.requires_arc = true

  s.frameworks = 'GLKit', 'MetalKit'

  install_modules_dependencies(s)

  # s.ios.vendored_frameworks = [
  #   'libs/ios/libskia.xcframework', 
  #   'libs/ios/libsvg.xcframework', 
  #   'libs/ios/libskshaper.xcframework',
  #   'libs/ios/libskparagraph.xcframework',
  #   'libs/ios/libskunicode.xcframework',
  # ]

  # s.dependency "React"
  # s.dependency "React-callinvoker"
  # s.dependency "React-Core"
end

